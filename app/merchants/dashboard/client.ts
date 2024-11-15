import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(
    "https://eth-sepolia.g.alchemy.com/v2/Kj6gL2WIT6LCpP2xoL4qaelgB9ZBG-27"
  ),
});
