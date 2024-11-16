"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { subscriptionABI } from "@/contracts/abis/subscriptionABI";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { useQuery } from "@tanstack/react-query";
import request, { gql } from "graphql-request";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { encodeFunctionData } from "viem";
import { publicClient } from "./client";
import { normalize } from "viem/ens";
import { ConfirmationDialog } from "@/app/components/confirmation-dialog";
import { ethers } from "ethers";

export default function MerchantCard({
  merchantName,
  merchantAddress,
}: {
  merchantName: string;
  merchantAddress: string;
}) {
  interface Transaction {
    userSubscribeds: {
      id: string;
      user: string;
    }[];
  }

  const router = useRouter();
  const [merchantDescription, setMerchantDescription] = useState<string>("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const { client } = useSmartWallets();
  const query = gql`
    {
      userSubscribeds(where: { merchant: "${merchantAddress}" }) {
        id
        user
      }
    }
  `;

  const url =
    "https://api.studio.thegraph.com/query/92897/perklysubscription/version/latest";
  const { data, refetch } = useQuery<Transaction>({
    queryKey: ["data", merchantAddress],
    async queryFn() {
      return await request(url, query);
    },
    // enabled: !!ens.data,
  });

  console.log(data);

  const handleSubscribeOnClick = async () => {
    if (!client) return;
    setIsSubscribing(true);
    const tx = await client.sendTransaction({
      account: client.account,
      calls: [
        {
          to: "0x2b37B13D8377FB21cA9FB9A070bBcCb22Ad90c0A",
          data: encodeFunctionData({
            abi: subscriptionABI,
            functionName: "subscribe",
            args: [merchantAddress as `0x${string}`],
          }),
        },
      ],
    });

    const provider = new ethers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_RPC_BASE
    );
    await provider.waitForTransaction(tx);
    console.log("done", tx);

    await refetch();
    router.refresh();
    setIsSubscribing(false);
  };

  const isSubscribed =
    client?.account &&
    data?.userSubscribeds.some(
      (subscription) =>
        subscription.user == client.account.address.toLowerCase()
    );

  useEffect(() => {
    const getMerchantDescription = async () => {
      const ensText = await publicClient.getEnsText({
        name: normalize(`${merchantName}.adenteo.eth`),
        key: "Description",
      });
      setMerchantDescription(ensText!);
    };

    getMerchantDescription();
  }, []);

  return (
    <Card className="p-4 flex flex-col h-full">
      <div className="mb-4">
        <div className="text-xl font-semibold">{merchantName}</div>
        <div className="text-xs line-clamp-4">{merchantDescription}</div>
        {data && data.userSubscribeds && (
          <div className="text-sm font-semibold">
            {data.userSubscribeds.length} subscribers
          </div>
        )}
      </div>
      {client && (
        <div className="mt-auto">
          <ConfirmationDialog
            disabled={isSubscribing || isSubscribed}
            onConfirm={async () => {
              await handleSubscribeOnClick();
            }}
            title="Subscribe?"
            label={isSubscribing ? "Subscribing..." : "Subscribe"}
            description="Confirm subscription to merchant?"
          />
        </div>
      )}
    </Card>
  );
}
