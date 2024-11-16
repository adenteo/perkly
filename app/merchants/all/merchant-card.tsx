"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { subscriptionABI } from "@/contracts/abis/subscriptionABI";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { useQuery } from "@tanstack/react-query";
import request, { gql } from "graphql-request";
import { useRouter } from "next/navigation";
import { encodeFunctionData } from "viem";

export default function MerchantCard({
  merchantName,
  merchantAddress,
  merchantDescription,
}: {
  merchantName: string;
  merchantAddress: string;
  merchantDescription: string;
}) {
  interface Transaction {
    userSubscribeds: {
      id: string;
      user: string;
    }[];
  }

  const router = useRouter();

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
    const tx = await client.sendTransaction({
      account: client.account,
      calls: [
        {
          to: "0xBAd0099A8833e28136e6329bb1dD1bE3faF5406f",
          data: encodeFunctionData({
            abi: subscriptionABI,
            functionName: "subscribe",
            args: [merchantAddress as `0x${string}`],
          }),
        },
      ],
    });
    await refetch();
    router.refresh();
  };

  const isSubscribed =
    client?.account &&
    data?.userSubscribeds.some(
      (subscription) =>
        subscription.user == client.account.address.toLowerCase()
    );

  return (
    <Card className="p-4">
      <div className="">
        <div className="text-xl font-semibold">{merchantName}</div>
        <div className="text-xs line-clamp-4">{merchantDescription}</div>
        {data && data.userSubscribeds && (
          <div className="text-sm font-semibold">
            {data.userSubscribeds.length} subscribers
          </div>
        )}
        {client && (
          <Button
            disabled={isSubscribed}
            className="mt-4"
            onClick={handleSubscribeOnClick}
          >
            Subscribe
          </Button>
        )}
      </div>
    </Card>
  );
}
