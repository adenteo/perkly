import { Bytes } from "@graphprotocol/graph-ts";
import {
  MerchantRegistered as MerchantRegisteredEvent,
  RewardTierReached as RewardTierReachedEvent,
  SpendingTracked as SpendingTrackedEvent,
  TierUpdated as TierUpdatedEvent,
  UserSubscribed as UserSubscribedEvent,
} from "../generated/Contract/Contract";
import {
  Merchant,
  MerchantRegistered,
  MerchantSubscriber,
  RewardTierReached,
  SpendingTracked,
  SpendingTrackedData,
  SpendingTrackedDataUser,
  Subscriber,
  TierUpdated,
  UserSubscribed,
} from "../generated/schema";

function getOrCreateSubscriber(id: Bytes): Subscriber {
  let subscriber = Subscriber.load(id);
  if (subscriber == null) {
    subscriber = new Subscriber(id);
    subscriber.save();
  }
  return subscriber;
}

function getOrCreateMerchant(id: Bytes, name: string): Merchant {
  let merchant = Merchant.load(id);
  if (merchant == null) {
    merchant = new Merchant(id);
    merchant.name = name;
    merchant.save();
  }
  return merchant;
}

function getOrCreateMerchantSubscriber(
  user: Bytes,
  merchant: Bytes
): MerchantSubscriber {
  let id = user.concat(merchant);
  let merchantSubscriber = MerchantSubscriber.load(id);
  if (merchantSubscriber == null) {
    merchantSubscriber = new MerchantSubscriber(id);
    merchantSubscriber.subscriber = user;
    merchantSubscriber.merchant = merchant;
    merchantSubscriber.save();
  }
  return merchantSubscriber as MerchantSubscriber;
}

export function handleMerchantRegistered(event: MerchantRegisteredEvent): void {
  let entity = new MerchantRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  getOrCreateMerchant(event.params.merchant, event.params.name);

  entity.merchant = event.params.merchant;
  entity.name = event.params.name;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRewardTierReached(event: RewardTierReachedEvent): void {
  let entity = new RewardTierReached(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params.user;
  entity.merchant = event.params.merchant;
  entity.tier = event.params.tier;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSpendingTracked(event: SpendingTrackedEvent): void {
  let entity = new SpendingTracked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  let spendingTrackedData = new SpendingTrackedData(
    event.block.timestamp.toString()
  );
  spendingTrackedData.amount = event.params.amountSpent;
  spendingTrackedData.merchant = getOrCreateMerchant(
    event.params.merchant,
    ""
  ).id;
  spendingTrackedData.save();

  let spendingTrackedDataUser = new SpendingTrackedDataUser(
    event.block.timestamp.toString()
  );
  spendingTrackedDataUser.amount = event.params.amountSpent;
  spendingTrackedDataUser.subscriber = getOrCreateSubscriber(
    event.params.user
  ).id;

  spendingTrackedDataUser.save();

  entity.user = event.params.user;
  entity.merchant = event.params.merchant;
  entity.amountSpent = event.params.amountSpent;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTierUpdated(event: TierUpdatedEvent): void {
  let entity = new TierUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.merchant = event.params.merchant;
  entity.tierIndex = event.params.tierIndex;
  entity.spendingThreshold = event.params.spendingThreshold;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUserSubscribed(event: UserSubscribedEvent): void {
  let subscriber = getOrCreateSubscriber(event.params.user);
  getOrCreateMerchantSubscriber(subscriber.id, event.params.merchant);

  let entity = new UserSubscribed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params.user;
  entity.merchant = event.params.merchant;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
