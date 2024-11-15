import {
  MerchantRegistered as MerchantRegisteredEvent,
  RewardTierReached as RewardTierReachedEvent,
  SpendingTracked as SpendingTrackedEvent,
  TierUpdated as TierUpdatedEvent,
  UserSubscribed as UserSubscribedEvent
} from "../generated/Contract/Contract"
import {
  MerchantRegistered,
  RewardTierReached,
  SpendingTracked,
  TierUpdated,
  UserSubscribed
} from "../generated/schema"

export function handleMerchantRegistered(event: MerchantRegisteredEvent): void {
  let entity = new MerchantRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.merchant = event.params.merchant
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardTierReached(event: RewardTierReachedEvent): void {
  let entity = new RewardTierReached(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.merchant = event.params.merchant
  entity.tier = event.params.tier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSpendingTracked(event: SpendingTrackedEvent): void {
  let entity = new SpendingTracked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.merchant = event.params.merchant
  entity.amountSpent = event.params.amountSpent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTierUpdated(event: TierUpdatedEvent): void {
  let entity = new TierUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.merchant = event.params.merchant
  entity.tierIndex = event.params.tierIndex
  entity.spendingThreshold = event.params.spendingThreshold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserSubscribed(event: UserSubscribedEvent): void {
  let entity = new UserSubscribed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.merchant = event.params.merchant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
