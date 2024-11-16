import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  MerchantRegistered,
  RewardTierReached,
  SpendingTracked,
  TierUpdated,
  UserSubscribed
} from "../generated/Contract/Contract"

export function createMerchantRegisteredEvent(
  merchant: Address,
  name: string
): MerchantRegistered {
  let merchantRegisteredEvent = changetype<MerchantRegistered>(newMockEvent())

  merchantRegisteredEvent.parameters = new Array()

  merchantRegisteredEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )
  merchantRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return merchantRegisteredEvent
}

export function createRewardTierReachedEvent(
  user: Address,
  merchant: Address,
  tier: i32
): RewardTierReached {
  let rewardTierReachedEvent = changetype<RewardTierReached>(newMockEvent())

  rewardTierReachedEvent.parameters = new Array()

  rewardTierReachedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardTierReachedEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )
  rewardTierReachedEvent.parameters.push(
    new ethereum.EventParam(
      "tier",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tier))
    )
  )

  return rewardTierReachedEvent
}

export function createSpendingTrackedEvent(
  user: Address,
  merchant: Address,
  amountSpent: BigInt
): SpendingTracked {
  let spendingTrackedEvent = changetype<SpendingTracked>(newMockEvent())

  spendingTrackedEvent.parameters = new Array()

  spendingTrackedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  spendingTrackedEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )
  spendingTrackedEvent.parameters.push(
    new ethereum.EventParam(
      "amountSpent",
      ethereum.Value.fromUnsignedBigInt(amountSpent)
    )
  )

  return spendingTrackedEvent
}

export function createTierUpdatedEvent(
  merchant: Address,
  tierIndex: i32,
  spendingThreshold: BigInt
): TierUpdated {
  let tierUpdatedEvent = changetype<TierUpdated>(newMockEvent())

  tierUpdatedEvent.parameters = new Array()

  tierUpdatedEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )
  tierUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tierIndex",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tierIndex))
    )
  )
  tierUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "spendingThreshold",
      ethereum.Value.fromUnsignedBigInt(spendingThreshold)
    )
  )

  return tierUpdatedEvent
}

export function createUserSubscribedEvent(
  user: Address,
  merchant: Address
): UserSubscribed {
  let userSubscribedEvent = changetype<UserSubscribed>(newMockEvent())

  userSubscribedEvent.parameters = new Array()

  userSubscribedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userSubscribedEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )

  return userSubscribedEvent
}
