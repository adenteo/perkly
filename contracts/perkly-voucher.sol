// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {VRFConsumerBaseV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PerklyVoucher is VRFConsumerBaseV2Plus, ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _voucherCounter;

    uint256 s_subscriptionId;
    address vrfCoordinator = 0x5C210eF41CD1a72de73bF76eC39637bB0d3d7BEE;
    bytes32 s_keyHash =
        0x9e1344a1247c8a1785d0a4681a27152bffdb43666ae5bf7d14d24a5efd44bf71;
    uint32 callbackGasLimit = 500000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 1;
    IERC20 public perklyToken;

    mapping(address => uint8[]) public merchantVoucherDiscounts;
    mapping(uint256 => Airdrop) private airdropRequest;

    struct Airdrop {
        address merchant;
        string ipfsHash;
        address[] subscribers;
    }

    event AirdropRequest(
        uint256 indexed requestId,
        address merchant,
        string ipfsHash,
        address[] subscribers
    );
    event VoucherDiscountsSet(address indexed merchant, uint8[] discounts);
    event SubscriberAdded(address indexed subscriber);
    event randomRecipientSelected(
        uint256 indexed requestId,
        address indexed selectedRecipient
    );
    event AirdropCompleted(
        uint256 indexed requestId,
        address indexed selectedRecipient,
        uint256 voucherId,
        address indexed merchant
    );
    event TokenBurn(uint256 indexed voucherId);

    constructor(
        uint256 subscriptionId,
        address perklytokenAddr
    ) VRFConsumerBaseV2Plus(vrfCoordinator) ERC721("PerklyVoucher", "PVCH") {
        s_subscriptionId = subscriptionId;
        perklyToken = IERC20(perklytokenAddr);
    }

    function initiateAirdrop(
        address merchantAddress,
        address[] memory subscribers,
        string memory tokenUri
    ) public returns (uint256 requestId) {
        requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: s_keyHash,
                subId: s_subscriptionId,
                requestConfirmations: requestConfirmations,
                callbackGasLimit: callbackGasLimit,
                numWords: numWords,
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({nativePayment: false})
                )
            })
        );

        airdropRequest[requestId] = Airdrop({
            merchant: merchantAddress,
            ipfsHash: string(abi.encodePacked("ipfs://", tokenUri)),
            subscribers: subscribers
        });

        emit AirdropRequest(
            requestId,
            merchantAddress,
            airdropRequest[requestId].ipfsHash,
            airdropRequest[requestId].subscribers
        );
    }

    function fulfillRandomWords(
        uint256 requestId,
        uint256[] calldata randomWords
    ) internal override {
        Airdrop storage airdrop = airdropRequest[requestId];
        address[] memory subscribers = airdrop.subscribers;
        string memory tokenURI = airdrop.ipfsHash;
        address merchant = airdrop.merchant;

        require(subscribers.length > 0, "No subscribers available");

        uint256 totalWeight = 0;
        uint256[] memory weights = new uint256[](subscribers.length);

        for (uint256 i = 0; i < subscribers.length; i++) {
            uint256 balance = perklyToken.balanceOf(subscribers[i]);
            weights[i] = balance;
            totalWeight += balance;
        }

        require(totalWeight > 0, "No subscriber has sufficient balance");

        uint256 randomValue = randomWords[0] % totalWeight;
        uint256 cumulativeWeight = 0;
        address selectedRecipient;

        for (uint256 i = 0; i < subscribers.length; i++) {
            cumulativeWeight += weights[i];
            if (randomValue < cumulativeWeight) {
                selectedRecipient = subscribers[i];
                break;
            }
        }

        require(selectedRecipient != address(0), "Recipient selection failed");

        _voucherCounter.increment();
        uint256 newVoucherId = _voucherCounter.current();
        _mint(selectedRecipient, newVoucherId);
        _setTokenURI(newVoucherId, tokenURI);

        emit AirdropCompleted(
            requestId,
            selectedRecipient,
            newVoucherId,
            merchant
        );

        delete airdropRequest[requestId];
    }

    function burn(uint256 voucherId) public {
        // Ensure that only the contract owner can call this function
        require(msg.sender == owner(), "Only the contract owner can burn NFTs");

        // Ensure that the NFT exists and the contract owner can burn it
        require(_exists(voucherId), "NFT does not exist");

        // Burn the NFT
        _burn(voucherId);
        emit TokenBurn(voucherId);
    }
}
