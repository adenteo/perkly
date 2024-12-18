/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
"use client";

import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { useQuery } from "@tanstack/react-query";
import request, { gql } from "graphql-request";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useMemo } from "react";
import { getEnsName } from "viem/actions";
import { publicClient } from "./client";
import { ethers } from "ethers";
import MerchantCustomVoucher from "@/app/components/merchant-custom-voucher";
import useMultiBaas from "@/app/hooks/use-multibaas";

import { getBuiltGraphSDK } from "../../../.graphclient";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchMerchant } from "@/app/actions";
import RecentAirdrops from "./recent-airdrops";

export default function Page() {
  const { initiateAirdrop } = useMultiBaas();

  const { client } = useSmartWallets();
  const [merchant, setMerchant] = useState<any>(null);
  const [ensNames, setEnsNames] = useState<{ [address: string]: string }>({});
  const [numWinners, setNumWinners] = useState(1);
  const [isAirdropping, setIsAirdropping] = useState(false);
  const [discountHash, setDiscountHash] = useState("");
  const blockscoutUrl = process.env.NEXT_PUBLIC_BLOCKSCOUT_URL;
  const {
    GetDailySpendingsMerchant,
    GetMerchantDashboardData,
    GetMerchantSubscribers,
    GetAirdropCompleteds,
  } = getBuiltGraphSDK();

  interface Transaction {
    spendingTrackeds: {
      id: string;
      amountSpent: string;
      user: string;
      merchant: string;
      blockTimestamp: string;
      transactionHash: string;
    }[];
    userSubscribeds: {
      id: string;
      user: string;
      blockTimestamp: string;
      transactionHash: string;
    }[];
  }

  const { data } = useQuery<Transaction>({
    queryKey: ["MerchantDashboard"],
    async queryFn() {
      return await GetMerchantDashboardData({
        merchantId: merchant?.walletAddress,
      });
    },
    enabled: !!merchant,
  });
  console.log(data);

  const last24Hours = useQuery({
    queryKey: ["totalSpendingStats_collection"],
    async queryFn() {
      return await GetDailySpendingsMerchant({
        merchantId: merchant?.walletAddress,
      });
    },
    enabled: !!merchant,
  });

  const { data: airdropData, refetch: refetchAirdrop } = useQuery({
    queryKey: ["AirdropData"],
    async queryFn() {
      const data = await GetAirdropCompleteds({
        merchantId: client!.account.address,
      });
      return data;
    },
    enabled: !!client,
  });

  const combinedData = useMemo(
    () =>
      data
        ? [
            ...data.spendingTrackeds.map((item) => ({
              ...item,
              type: "spendingTracked",
            })),
            ...data.userSubscribeds.map((item) => ({
              ...item,
              type: "userSubscribed",
            })),
          ].sort(
            (a, b) => parseInt(b.blockTimestamp) - parseInt(a.blockTimestamp)
          )
        : [],
    [data]
  );

  const totalRevenue = useMemo(
    () =>
      data?.spendingTrackeds.reduce(
        (acc, curr) => acc + parseInt(curr.amountSpent),
        0
      ),
    [data]
  );

  const totalSubscriptions = data?.userSubscribeds.length || 0;

  const handleInitiateAirdrop = async () => {
    setIsAirdropping(true);
    try {
      const data = await GetMerchantSubscribers({
        merchantId: client.account.address,
      });
      const subscriberList = data.subscribers.map((s) => s.id);
      console.log("Subscriber List:", subscriberList);

      const provider = new ethers.JsonRpcProvider(
        "https://base-sepolia.g.alchemy.com/v2/Kj6gL2WIT6LCpP2xoL4qaelgB9ZBG-27"
      );
      const wallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIVATE_KEY_EOA as string
      );
      const signer = wallet.connect(provider);

      // Fetch the current nonce for the wallet
      let currentNonce = await provider.getTransactionCount(
        wallet.address,
        "latest"
      );

      console.log("Initiating Airdrop");
      for (let i = 0; i < numWinners; i++) {
        try {
          // Generate the transaction data
          const txn = await initiateAirdrop(
            client.account.address,
            subscriberList,
            discountHash
          );

          // Add the correct nonce to the transaction
          const tx = await signer.sendTransaction({
            ...txn,
            nonce: currentNonce,
          });

          console.log(`Airdrop transaction ${i + 1}:`, tx);
          await provider.waitForTransaction(tx.hash);
          // Increment the nonce for the next transaction
          currentNonce++;
        } catch (error) {
          console.error(`Error initiating airdrop for winner ${i + 1}:`, error);
        }
      }
    } catch (error) {
      console.error("Error initiating airdrop:", error);
    } finally {
      setIsAirdropping(false);
    }
  };

  const handleCreateHash = async (formData: any) => {
    try {
      // You can make your API call here
      const apiResponse = await fetch("/api/submit-merchant-data", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      if (apiResponse.ok) {
        alert("Form submitted successfully!");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (!client) {
      return;
    }

    const checkMerchant = async () => {
      const existingMerchant = await fetchMerchant(client.account.address);
      if (existingMerchant) {
        console.log("Existing Merchant", existingMerchant);
        setMerchant(existingMerchant);
      }
    };

    checkMerchant();
  }, [client]);

  useEffect(() => {
    const fetchEnsNames = async () => {
      const uniqueUsers = Array.from(new Set(combinedData.map((d) => d.user)));
      const ensNamesMap: { [address: string]: string } = {};

      await Promise.all(
        uniqueUsers.map(async (address) => {
          const ensName = await getEnsName(publicClient, {
            address: address as `0x${string}`,
          });
          if (ensName) {
            ensNamesMap[address] = ensName;
          }
        })
      );

      setEnsNames(ensNamesMap);
    };

    if (combinedData.length > 0) {
      fetchEnsNames();
    }
  }, [combinedData]);

  if (!merchant || !combinedData) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div className="space-y-4 p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>
              Welcome back, {merchant?.businessName}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="font-semibold">API key:</div>
            <span className="bg-gray-200 p-1 rounded-md">
              {merchant?.apiKey}
            </span>
            <div className="font-semibold mb-2">Stripe Webhook:</div>
            <span className="bg-gray-200 p-1 rounded-md">
              https://perkly.vercel.app/api/{merchant?.apiKey}/stripe
            </span>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-3">
          <MerchantCustomVoucher
            businessName={merchant?.businessName}
            onSubmit={handleCreateHash}
          />
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Voucher Giveaway</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">
                Number of Winners:
              </label>
              <input
                type="number"
                value={numWinners}
                onChange={(e) => setNumWinners(Number(e.target.value))}
                className="w-20 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">
                Discount Hash:
              </label>
              <input
                type="text"
                value={discountHash}
                onChange={(e) => setDiscountHash(e.target.value)}
                className="px-3 py-2 w-1/2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <Button
              disabled={isAirdropping}
              className="w-fit"
              onClick={async () => {
                await handleInitiateAirdrop();
              }}
            >
              Initiate Airdrop
            </Button>
            <Card className="mt-4 p-6">
              <CardTitle>Recent Airdrops</CardTitle>
              <RecentAirdrops data={airdropData} />
            </Card>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Spendings Tracked
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(totalRevenue as number) / 100 || 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Transactions Count
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data?.spendingTrackeds.length ?? 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Spendings In Last 24 Hours
              <p className="text-xs text-gray-500">
                This is updated every day at 00:00
              </p>
            </CardTitle>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              $
              {(last24Hours.data?.totalSpendingStats_collection[0]
                ?.totalAmount as number) / 100 || 0}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Subscriptions
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSubscriptions}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            {combinedData?.map((data, idx) => {
              const ensName = ensNames[data.user] || data.user;
              return (
                <div key={idx} className="p-2 border-b border-gray-200 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      {data.type === "spendingTracked" ? (
                        <div className="font-semibold text-center text-xs bg-green-100 rounded-full p-2 w-fit">
                          New Transaction
                        </div>
                      ) : (
                        <div className="font-semibold text-center text-xs bg-orange-100 rounded-full p-2 w-fit">
                          New Subscription
                        </div>
                      )}
                      <p>
                        User:{" "}
                        <a
                          href={`${blockscoutUrl}/address/${ensName}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {ensName}
                        </a>
                      </p>
                      <p className="text-xs">
                        Timestamp:{" "}
                        {new Date(
                          parseInt(data.blockTimestamp) * 1000
                        ).toLocaleString()}
                      </p>
                      <a
                        className="text-xs text-blue-500"
                        target="_blank"
                        href={`${blockscoutUrl}/tx/${data.transactionHash}`}
                      >
                        {data.transactionHash}
                      </a>
                    </div>
                    <div>
                      {data.type === "spendingTracked" ? (
                        <div className="font-bold">
                          ${data.amountSpent / 100}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
