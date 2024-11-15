// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PerklySubscription {
    struct Tier {
        uint256 spendingThreshold; // Spending threshold for this tier
    }

    struct Merchant {
        bool isRegistered;
        string name; // Added merchant name
        Tier[] tiers;
    }

    mapping(address => Merchant) public merchants;
    mapping(address => mapping(address => uint256)) public userSpending;
    mapping(address => mapping(address => uint8)) public userTier;

    event MerchantRegistered(address indexed merchant, string name);
    event TierUpdated(
        address indexed merchant,
        uint8 indexed tierIndex,
        uint256 spendingThreshold
    );
    event UserSubscribed(address indexed user, address indexed merchant);
    event SpendingTracked(
        address indexed user,
        address indexed merchant,
        uint256 amountSpent
    );
    event RewardTierReached(
        address indexed user,
        address indexed merchant,
        uint8 tier
    );

    // Admin-only function to register merchants with a name
    function registerMerchant(
        address merchantAddress,
        string memory name
    ) external {
        require(!merchants[merchantAddress].isRegistered, "Already registered");
        merchants[merchantAddress].isRegistered = true;
        merchants[merchantAddress].name = name; // Store merchant name
        emit MerchantRegistered(merchantAddress, name);
    }

    // Admin or merchant function to update tier configurations
    function updateTiers(address merchant, Tier[] memory newTiers) public {
        require(msg.sender == merchant, "Not authorized");
        delete merchants[merchant].tiers;
        for (uint8 i = 0; i < newTiers.length; i++) {
            merchants[merchant].tiers.push(newTiers[i]);
            emit TierUpdated(merchant, i, newTiers[i].spendingThreshold); // Emit each tier update individually
        }
    }

    // Function to subscribe a user to a merchant's loyalty program
    function subscribe(address merchant) external {
        require(merchants[merchant].isRegistered, "Merchant not registered");
        emit UserSubscribed(msg.sender, merchant);
    }

    // Function for merchants to track spending
    function trackSpending(
        address user,
        address merchant,
        uint256 amountSpent
    ) external {
        userSpending[user][merchant] += amountSpent;
        emit SpendingTracked(user, merchant, amountSpent);

        uint8 newTier = calculateTier(user, merchant);
        if (newTier > userTier[user][merchant]) {
            userTier[user][merchant] = newTier;
            emit RewardTierReached(user, merchant, newTier);
        }
    }

    // Internal function to calculate the highest tier the user qualifies for
    function calculateTier(
        address user,
        address merchant
    ) internal view returns (uint8) {
        uint256 totalSpent = userSpending[user][merchant];
        Tier[] memory merchantTiers = merchants[merchant].tiers;
        uint8 highestTier = 0;

        for (uint8 i = 0; i < merchantTiers.length; i++) {
            if (totalSpent >= merchantTiers[i].spendingThreshold) {
                highestTier = i + 1;
            } else {
                break;
            }
        }
        return highestTier;
    }

    // Get current spending and tier for a user
    function getUserInfo(
        address user,
        address merchant
    ) external view returns (uint256 spending, uint8 tier) {
        return (userSpending[user][merchant], userTier[user][merchant]);
    }

    // Get the name of a merchant
    function getMerchantName(
        address merchant
    ) external view returns (string memory) {
        require(merchants[merchant].isRegistered, "Merchant not registered");
        return merchants[merchant].name;
    }
}
