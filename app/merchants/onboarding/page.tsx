"use client";
// import { addMerchant, addMerchantENS } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { RegistryABI } from "@/contracts/abis/RegistryABI";
import {
  UnsignedTransactionRequest,
  SendTransactionModalUIOptions,
  useDelegatedActions,
  usePrivy,
  useWallets,
  useFundWallet,
} from "@privy-io/react-auth";
// import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { ethers } from "ethers";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { encodeFunctionData } from "viem";
import { baseSepolia } from "viem/chains";

const MerchantOnboarding = () => {
  const { user, sendTransaction } = usePrivy();
  const { wallets } = useWallets();
  const { fundWallet } = useFundWallet();
  const [merchantName, setMerchantName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState<string>("");
  const { delegateWallet } = useDelegatedActions();
  const router = useRouter();

  if (!user) {
    return <div>Please log in to continue</div>;
  }
  console.log(wallets);

  const handleOnboardOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    const requestData: UnsignedTransactionRequest = {
      to: "0xBAd0099A8833e28136e6329bb1dD1bE3faF5406f",
      data: encodeFunctionData({
        abi: [
          {
            inputs: [
              {
                internalType: "address",
                name: "merchantAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
            ],
            name: "registerMerchant",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        functionName: "registerMerchant",
        args: [wallets[0].address as `0x${string}`, merchantName],
      }),
    };
    const fundWalletConfig = { amount: "0.02" };

    const uiConfig: SendTransactionModalUIOptions = {
      header: "Sample header text",
      description: "Sample description text",
      buttonText: "Sample button text",
    };
    await fundWallet(wallets[0].address, {
      chain: baseSepolia,
      asset: "USDC",
    });
    // await sendTransaction(requestData, uiConfig, {
    //   chain: baseSepolia,
    //   amount: "0.02",
    // });
    // await delegateWallet({
    //   address: "0x3e4540b2961dA8158E9790E0aB334D279a951623",
    //   chainType: "solana",
    // });
    // const encodedPacked = ethers.utils.solidityPackedKeccak256(
    //   ["string"],
    //   [merchantName]
    // );
    // await addMerchantENS(merchantName, client.account.address);
    // try {
    //   const tx = await sendTransaction({
    //     calls: [
    //       // {
    //       //   to: "0xBAd0099A8833e28136e6329bb1dD1bE3faF5406f",
    //       //   data: encodeFunctionData({
    //       //     abi: subscriptionABI,
    //       //     functionName: "registerMerchant",
    //       //     args: [client.account.address, merchantName],
    //       //   }),
    //       // },
    //       {
    //         to: "0xc971cb7f3ac938ed4f75fef3c10fdd338b9a092d",
    //         data: encodeFunctionData({
    //           abi: RegistryABI,
    //           functionName: "setAddr",
    //           args: [encodedPacked as any, BigInt(60), client.account.address],
    //         }),
    //       },
    //       {
    //         to: "0xc971cb7f3ac938ed4f75fef3c10fdd338b9a092d",
    //         data: encodeFunctionData({
    //           abi: RegistryABI,
    //           functionName: "setText",
    //           args: [encodedPacked as any, "Description", "test description"],
    //         }),
    //       },
    //     ],
    //   });
    //   await addMerchant(merchantName, client.account.address);
    //   setTxHash(tx);
    // } catch (error) {
    //   console.error("Error registering merchant:", error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <Card className="w-[350px] m-4 overflow-auto">
      <CardHeader>
        <CardTitle>Launch loyalty programme</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleOnboardOnSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Merchant Name</Label>
              <Input
                id="name"
                name="name"
                onChange={(e) => setMerchantName(e.target.value)}
                placeholder="Name of your business"
                required
                minLength={3}
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <Button className="w-full" type="submit">
              {isLoading ? <LoaderCircle className="animate-spin" /> : "Launch"}
            </Button>
            {isLoading && (
              <span>Configuring dashboard. This could take awhile...</span>
            )}
            {txHash && (
              <div className="self-start text-xs mt-6">
                <div>Registration success!</div>
                <a
                  href={`https://sepolia.etherscan.io/tx/${txHash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  {txHash}
                </a>
                <Button
                  type="button"
                  className="font-bold"
                  onClick={() => {
                    router.push("/merchants/dashboard");
                  }}
                >
                  Go to dashboard
                </Button>
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default MerchantOnboarding;
