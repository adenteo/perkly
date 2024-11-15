import "server-only";

import { ethers } from "ethers";
import { rewardStripeABI } from "@/contracts/abis/rewardStripeABI";
export const creditUser = async (
  stripeEventId: string,
  receiverAddress: string,
  merchantAddress: string
) => {
  const consumerAddress = "0x2b37B13D8377FB21cA9FB9A070bBcCb22Ad90c0A"; // REPLACE this with your Functions consumer address
  const subscriptionId = 229; // REPLACE this with your subscription ID
  const donId = "fun-base-sepolia-1";
  const explorerUrl = "base-sepolia.blockscout.com";
  const slotIdNumber = 0; // slot ID where to upload the secrets

  const source = `
  const apiKey = args[0];
  const eventId = args[1];

  // Execute the API request (Promise)
  const apiResponse = await Functions.makeHttpRequest({
    url: \`https://\${apiKey}@api.stripe.com/v1/events/\${eventId}\`,
  });

  if (apiResponse.error) {
    console.error(apiResponse.error);
    throw Error("Request failed");
  }

  const { data } = apiResponse;

  console.log("API response data:", JSON.stringify(data, null, 2));

  // Return Character Name
  return Functions.encodeUint256(data.data.object.amount_total);
`;

  const args = [process.env.NEXT_PUBLIC_STRIPE_TEST_KEY, stripeEventId]; //We're passing the stripe api key directly in here as hacky way to prevent using the temporary DON hosted secret storing as we were facing some issues. Ideally, every merchant will provide us with a limited control stripe api key that we can use to fetch the event details.

  const gasLimit = 300000;

  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY_EOA;
  if (!privateKey)
    throw new Error(
      "private key not provided - check your environment variables"
    );

  const rpcUrl = process.env.NEXT_PUBLIC_RPC_BASE;

  console.log("rpcUrl", rpcUrl);

  if (!rpcUrl)
    throw new Error(`rpcUrl not provided  - check your environment variables`);

  const provider = new ethers.JsonRpcProvider(rpcUrl);

  const wallet = new ethers.Wallet(privateKey);
  const signer = wallet.connect(provider);

  //////// MAKE REQUEST ////////

  console.log("\nMake request...");

  const rewardUserStripe = new ethers.Contract(
    consumerAddress,
    rewardStripeABI,
    signer
  );

  // Actual transaction call
  const transaction = await rewardUserStripe.sendRequest(
    source, // source
    slotIdNumber, // slot ID of the encrypted secrets
    0, // version of the encrypted secrets
    args,
    [], // bytesArgs - arguments can be encoded off-chain to bytes.
    subscriptionId,
    gasLimit,
    ethers.encodeBytes32String(donId), // jobId is bytes32 representation of donId
    receiverAddress,
    merchantAddress
  );

  // Log transaction details
  console.log(
    `\n✅ Functions request sent! Transaction hash ${transaction.hash}. Waiting for a response...`
  );

  console.log(
    `See your request in the explorer ${explorerUrl}/tx/${transaction.hash}`
  );

  return transaction.hash;
};
