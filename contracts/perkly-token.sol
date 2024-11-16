// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {VRFConsumerBaseV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import {AutomationCompatibleInterface} from "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";

// PUSH Comm Contract Interface
interface IPUSHCommInterface {
    function sendNotification(
        address _channel,
        address _recipient,
        bytes calldata _identityp
    ) external;
}

contract PerklyToken is
    VRFConsumerBaseV2Plus,
    ERC20,
    AutomationCompatibleInterface
{
    uint256 s_subscriptionId;
    address vrfCoordinator = 0x5C210eF41CD1a72de73bF76eC39637bB0d3d7BEE;
    bytes32 s_keyHash =
        0x9e1344a1247c8a1785d0a4681a27152bffdb43666ae5bf7d14d24a5efd44bf71;
    uint32 callbackGasLimit = 500000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 1;
    uint256 private constant ROLL_IN_PROGRESS = 42;
    uint256 public multiplier;
    bool public isFlashFridayActive;
    uint256 private originalMultiplier; // Store the original multiplier before doubling
    int256 private initialEthPrice; // Store initial ETH price for comparison
    uint256 public lastUpkeepTime; // Track the last time upkeep was performed
    uint256 public upkeepInterval = 5 minutes; // Set desired interval (e.g., 1 day)

    AggregatorV3Interface internal dataFeed;

    mapping(uint256 => address) private s_rollers;
    mapping(address => uint256) private s_results;

    event NewMultiplierRequest(
        uint256 indexed requestId,
        address indexed roller
    );
    event SetNewMultiplier(uint256 indexed requestId, uint256 multiplier);
    event FlashFriday(bool isFlashFridayActive, uint256 newMultiplier);
    event PriceIncrease(uint256 newMultiplier, int256 latestEthPrice);

    constructor(
        uint256 subscriptionId
    ) VRFConsumerBaseV2Plus(vrfCoordinator) ERC20("PerklyToken", "PERK") {
        s_subscriptionId = subscriptionId;
        multiplier = 1;
        dataFeed = AggregatorV3Interface(
            0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1
        );
        initialEthPrice = getLatestEthPrice();
        lastUpkeepTime = block.timestamp; // Initialize last upkeep time to current time
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
        uint256 tokensToMint = (multiplier *
            (purchaseAmountCents * (10 ** decimals()))) / 100; // 1 cent = 0.01 PERKLY
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

    function rollNewMultiplier(
        address roller
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

        s_rollers[requestId] = roller;
        s_results[roller] = ROLL_IN_PROGRESS;
        emit NewMultiplierRequest(requestId, roller);
    }

    function fulfillRandomWords(
        uint256 requestId,
        uint256[] calldata randomWords
    ) internal override {
        uint256 randomValue = (randomWords[0] % 5) + 1; // Random value between 1 and 5
        multiplier = randomValue; // Set the multiplier to the received random value
        emit SetNewMultiplier(requestId, randomValue);
    }

    /**
     * @notice Allows the contract owner to set the multiplier value directly
     * @param newMultiplier The new multiplier value to set
     */
    function setMultiplierDirectly(uint256 newMultiplier) external {
        require(newMultiplier > 0, "Multiplier must be greater than 0");
        multiplier = newMultiplier;
        emit SetNewMultiplier(0, newMultiplier); // Using 0 as requestId for direct set
    }

    /**
     * @notice Chainlink Automation-compatible function to activate Flash Friday multiplier.
     * This function doubles the current multiplier for Flash Friday.
     */
    function activateFlashFridayMultiplier() external {
        require(!isFlashFridayActive, "Flash Friday is already active");
        originalMultiplier = multiplier; // Save the current multiplier
        multiplier *= 2; // Double the multiplier for Flash Friday
        isFlashFridayActive = true;
        emit FlashFriday(isFlashFridayActive, multiplier);
    }

    /**
     * @notice Deactivates the Flash Friday multiplier and restores the original multiplier.
     */
    function deactivateFlashFridayMultiplier() external {
        require(isFlashFridayActive, "Flash Friday is not active");
        multiplier = originalMultiplier; // Restore the original multiplier
        isFlashFridayActive = false;
        emit FlashFriday(isFlashFridayActive, multiplier);
    }

    /**
     * @notice Get the latest price from Chainlink Data Feed.
     * @return int256 latest price of ETH in USD with 8 decimals
     */
    function getLatestEthPrice() public view returns (int256) {
        (, int256 price, , , ) = dataFeed.latestRoundData();
        return price;
    }

    /** @notice Chainlink Automation-compatible function to check if upkeep is needed.
     * @return upkeepNeeded Boolean to trigger upkeep
     */
    function checkUpkeep(
        bytes calldata
    ) external view override returns (bool upkeepNeeded, bytes memory) {
        int256 targetPrice = (initialEthPrice * 105) / 100;
        // int256 latestEthPrice = getLatestEthPrice();
        int256 latestEthPrice = targetPrice + 100; // Mocked value for testing

        // Check if enough time has passed since the last upkeep
        bool timeElapsed = (block.timestamp - lastUpkeepTime) >= upkeepInterval;

        // Trigger upkeep if both time interval and price increase conditions are met
        upkeepNeeded = timeElapsed && (latestEthPrice >= targetPrice);
    }

    /**
     * @notice Chainlink Automation-compatible function to perform upkeep.
     * Updates the multiplier based on price increase without re-checking the threshold.
     */
    function performUpkeep(bytes calldata) external override {
        int256 latestEthPrice = getLatestEthPrice();
        initialEthPrice = latestEthPrice; // Reset initial price for the next increase
        multiplier = (multiplier * 3);
        lastUpkeepTime = block.timestamp; // Update the last upkeep time
        emit PriceIncrease(multiplier, latestEthPrice);
    }
}
