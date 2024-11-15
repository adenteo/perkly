import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { MerchantRegistered } from "../generated/schema"
import { MerchantRegistered as MerchantRegisteredEvent } from "../generated/Contract/Contract"
import { handleMerchantRegistered } from "../src/contract"
import { createMerchantRegisteredEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let merchant = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let name = "Example string value"
    let newMerchantRegisteredEvent = createMerchantRegisteredEvent(
      merchant,
      name
    )
    handleMerchantRegistered(newMerchantRegisteredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MerchantRegistered created and stored", () => {
    assert.entityCount("MerchantRegistered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MerchantRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "merchant",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MerchantRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
