"use client";
import { addMerchant, addMerchantENS } from "@/app/actions";
import { ConfirmationDialog } from "@/app/components/confirmation-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RegistryABI } from "@/contracts/abis/registryABI";
import { subscriptionABI } from "@/contracts/abis/subscriptionABI";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { encodeFunctionData } from "viem";

const MerchantOnboarding = () => {
  const { client } = useSmartWallets();
  const [merchantName, setMerchantName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState<string>("");
  const router = useRouter();
  const blockscoutUrl = process.env.NEXT_PUBLIC_BLOCKSCOUT_URL

  if (!client) {
    return <div>Please log in to continue</div>;
  }

  const handleOnboardOnSubmit = async () => {
    setIsLoading(true);
    const encodedPacked = ethers.solidityPackedKeccak256(
      ["string"],
      [merchantName]
    );
    await addMerchantENS(merchantName, client.account.address);
    try {
      const tx = await client.sendTransaction({
        calls: [
          {
            to: "0x2b37B13D8377FB21cA9FB9A070bBcCb22Ad90c0A",
            data: encodeFunctionData({
              abi: subscriptionABI,
              functionName: "registerMerchant",
              args: [client.account.address, merchantName],
            }),
          },
          {
            to: "0xed2c1070d9523fd0c5d03b7abdc7a12ef9e7f75c",
            data: encodeFunctionData({
              abi: RegistryABI,
              functionName: "setAddr",
              args: [encodedPacked as any, BigInt(60), client.account.address],
            }),
          },
          {
            to: "0xed2c1070d9523fd0c5d03b7abdc7a12ef9e7f75c",
            data: encodeFunctionData({
              abi: RegistryABI,
              functionName: "setText",
              args: [encodedPacked as any, "Description", description],
            }),
          },
        ],
      });
      await addMerchant(merchantName, client.account.address);
      setTxHash(tx);
    } catch (error) {
      console.error("Error registering merchant:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-16">
      <Card className="w-[350px] m-4 overflow-auto">
        <CardHeader>
          <CardTitle>Launch loyalty programme</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-4">
                <Label htmlFor="name">Merchant Name</Label>
                <Input
                  id="name"
                  name="name"
                  onChange={(e) => setMerchantName(e.target.value)}
                  placeholder="Name of your business"
                  required
                  minLength={3}
                />
                <Label htmlFor="name">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description of your business"
                  required
                  minLength={3}
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <ConfirmationDialog
                disabled={isLoading || !merchantName || !description}
                onConfirm={async () => await handleOnboardOnSubmit()}
                label={"Launch"}
                title={"Confirm Launch?"}
                description={
                  "We will launch your subscription programme for you. This action cannot be undone."
                }
              />
              {isLoading && (
                <span className="mt-4">
                  Configuring dashboard. This could take awhile...
                </span>
              )}
              {txHash && (
                <div className="self-start text-xs mt-6">
                  <div>Registration success!</div>
                  <a
                    href={`${blockscoutUrl}/tx/${txHash}`}
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
    </div>
  );
};

export default MerchantOnboarding;
