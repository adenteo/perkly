// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";
import "./perkly-token.sol";
import "./subscription.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract RewardUserStripe is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;

    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;

    PerklyToken public perklyToken;
    PerklySubscription public perklySubscription;
    address public receiverAddress;
    address public merchantAddress;

    error UnexpectedRequestID(bytes32 requestId);

    event Response(bytes32 indexed requestId, bytes response, bytes err);
    event TransactionRecorded(address indexed receiver, uint256 amount);
    event RewardPurchaseFailed(
        address indexed receiver,
        uint256 amount,
        string reason
    );

    constructor(
        address router,
        address perklyTokenAddress,
        address perklySubscriptionAddress
    ) FunctionsClient(router) ConfirmedOwner(msg.sender) {
        perklyToken = PerklyToken(perklyTokenAddress);
        perklySubscription = PerklySubscription(perklySubscriptionAddress);
    }

    /**
     * @notice Send a simple request
     * @param source JavaScript source code
     * @param donHostedSecretsSlotID Don hosted secrets slotId
     * @param donHostedSecretsVersion Don hosted secrets version
     * @param args List of arguments accessible from within the source code
     * @param bytesArgs Array of bytes arguments, represented as hex strings
     * @param subscriptionId Billing ID
     */
    function sendRequest(
        string memory source,
        uint8 donHostedSecretsSlotID,
        uint64 donHostedSecretsVersion,
        string[] memory args,
        bytes[] memory bytesArgs,
        uint64 subscriptionId,
        uint32 gasLimit,
        bytes32 donID,
        address receiverId,
        address merchantId
    ) external onlyOwner returns (bytes32 requestId) {
        FunctionsRequest.Request memory req;
        receiverAddress = receiverId;
        merchantAddress = merchantId;
        req.initializeRequestForInlineJavaScript(source);
        if (donHostedSecretsVersion > 0) {
            req.addDONHostedSecrets(
                donHostedSecretsSlotID,
                donHostedSecretsVersion
            );
        }
        if (args.length > 0) req.setArgs(args);
        if (bytesArgs.length > 0) req.setBytesArgs(bytesArgs);
        s_lastRequestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donID
        );
        return s_lastRequestId;
    }

    /**
     * @notice Send a pre-encoded CBOR request
     * @param request CBOR-encoded request data
     * @param subscriptionId Billing ID
     * @param gasLimit The maximum amount of gas the request can consume
     * @param donID ID of the job to be invoked
     * @return requestId The ID of the sent request
     */
    function sendRequestCBOR(
        bytes memory request,
        uint64 subscriptionId,
        uint32 gasLimit,
        bytes32 donID
    ) external onlyOwner returns (bytes32 requestId) {
        s_lastRequestId = _sendRequest(
            request,
            subscriptionId,
            gasLimit,
            donID
        );
        return s_lastRequestId;
    }

    /**
     * @notice Store latest result/error
     * @param requestId The request ID, returned by sendRequest()
     * @param response Aggregated response from the user code
     * @param err Aggregated error from the user code or from the execution pipeline
     * Either response or error parameter will be set, but never both
     */
    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        if (s_lastRequestId != requestId) {
            revert UnexpectedRequestID(requestId);
        }
        s_lastResponse = response;
        s_lastError = err;
        emit Response(requestId, s_lastResponse, s_lastError);

        if (err.length == 0) {
            // Decode the response to uint256 amount
            uint256 amountToTransfer = abi.decode(response, (uint256));
            // Call rewardPurchase on the PerklyMasterToken contract
            // Try to call rewardPurchase and handle any errors
            try perklyToken.rewardPurchase(receiverAddress, amountToTransfer) {
                // If successful, emit a success event
                emit TransactionRecorded(receiverAddress, amountToTransfer);
                perklySubscription.trackSpending(
                    receiverAddress,
                    merchantAddress,
                    amountToTransfer
                );
            } catch Error(string memory reason) {
                // If the rewardPurchase call reverts with a reason, emit a failure event with the reason
                emit RewardPurchaseFailed(
                    receiverAddress,
                    amountToTransfer,
                    reason
                );
            }
        }
    }
}
