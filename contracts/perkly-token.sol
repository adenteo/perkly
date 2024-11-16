// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// PUSH Comm Contract Interface
interface IPUSHCommInterface {
    function sendNotification(
        address _channel,
        address _recipient,
        bytes calldata _identityp
    ) external;
}
contract PerklyMasterToken is ERC20 {
    // Conversion rate: 1 SGD = 100 PERKLY
    address public owner;

    constructor(address _owner) ERC20("PerklyToken", "PERK") {
        owner = _owner; // Set the owner dynamically
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only contract owner can call this function."
        );
        _;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        owner = newOwner;
    }

    /**
     * @notice Rewards users with PERKLY tokens based on purchase amount
     * @param user The address of the user receiving the tokens
     * @param purchaseAmountCents The purchase amount in SGD
     */
    function rewardPurchase(
        address user,
        uint256 purchaseAmountCents
    ) external {
        uint256 tokensToMint = (purchaseAmountCents * (10 ** decimals())) / 100; // 1 cent = 0.01 PERKLY
        IPUSHCommInterface(0x6e489B7af21cEb969f49A90E481274966ce9D74d)
            .sendNotification(
                0x65A63530f98f299F51b99C38348962254152a696, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel
                user, // to recipient, put YOUR_CHANNEL_ADDRESS in case you want Broadcast or Subset. For Targetted put the address to which you want to send
                bytes(
                    string(
                        // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                        abi.encodePacked(
                            "0",
                            "+",
                            "3",
                            "+",
                            "Cashback Rewarded",
                            "+",
                            "We have rewarded your cashback amount into your wallet" // notification body
                        )
                    )
                )
            );
        _mint(user, tokensToMint);
    }
}
