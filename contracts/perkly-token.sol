// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {VRFConsumerBaseV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import {AutomationCompatibleInterface} from "@chainlink/contracts/src/v0.8/automation/AutomationCompatible.sol";

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
    uint256 private originalMultiplier;
    int256 private initialEthPrice;
    uint256 public lastUpkeepTime;
    uint256 public upkeepInterval = 3 minutes;

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
        // Base Sepolia Testnet Price Feed: ETH / USD
        dataFeed = AggregatorV3Interface(
            0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1
        );
        initialEthPrice = getLatestEthPrice();
        lastUpkeepTime = block.timestamp;
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
        uint256 randomValue = (randomWords[0] % 5) + 1;
        multiplier = randomValue;
        emit SetNewMultiplier(requestId, randomValue);
    }

    /**
     * @notice Allows the contract owner to set the multiplier value directly
     * @param newMultiplier The new multiplier value to set
     */
    function setMultiplierDirectly(uint256 newMultiplier) external {
        require(newMultiplier > 0, "Multiplier must be greater than 0");
        multiplier = newMultiplier;
        emit SetNewMultiplier(0, newMultiplier);
    }

    /**
     * @notice Chainlink Automation-compatible function to activate Flash Friday multiplier.
     * This function doubles the current multiplier for Flash Friday.
     */
    function activateFlashFridayMultiplier() public {
        require(!isFlashFridayActive, "Flash Friday is already active");
        originalMultiplier = multiplier;
        multiplier *= 2;
        isFlashFridayActive = true;
        emit FlashFriday(isFlashFridayActive, multiplier);
    }

    /**
     * @notice Deactivates the Flash Friday multiplier and restores the original multiplier.
     */
    function deactivateFlashFridayMultiplier() public {
        require(isFlashFridayActive, "Flash Friday is not active");
        multiplier = originalMultiplier;
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
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory performData)
    {
        int256 targetPrice = (initialEthPrice * 105) / 100;
        int256 latestEthPrice = getLatestEthPrice();
        bool isFriday = ((block.timestamp / 1 days + 4) % 7) == 1;

        bool priceCondition = latestEthPrice >= targetPrice;
        bool timeElapsed = (block.timestamp - lastUpkeepTime) >= upkeepInterval;

        upkeepNeeded = timeElapsed && (priceCondition || isFriday);

        performData = abi.encode(isFriday, priceCondition);
    }

    /**
     * @notice Chainlink Automation-compatible function to perform upkeep.
     * Updates the multiplier based on price increase without re-checking the threshold.
     */
    function performUpkeep(bytes calldata performData) external override {
        (bool isFriday, bool priceCondition) = abi.decode(
            performData,
            (bool, bool)
        );

        if (isFriday && !isFlashFridayActive) {
            activateFlashFridayMultiplier();
        }

        if (priceCondition) {
            int256 latestEthPrice = getLatestEthPrice();
            initialEthPrice = latestEthPrice;
            multiplier = (multiplier * 3);
            emit PriceIncrease(multiplier, latestEthPrice);
        }

        lastUpkeepTime = block.timestamp;
    }
}
