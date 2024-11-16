/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import SendNotification from "@/app/components/notification-send";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import useMultiBaas from "../../hooks/use-multibaas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import VoucherCard from "@/app/components/voucher-card";
import { useQuery } from "@tanstack/react-query";
import { getBuiltGraphSDK } from "@/.graphclient";

interface Voucher {
  selectedRecipient: string;
  voucherId: string;
  metadata: any;
  imageUrl: string;
}

export default function UserProfile() {
  const { getVoucherEvents } = useMultiBaas();
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const contractAddress = process.env
    .NEXT_PUBLIC_PERKLY_VOUCHER_ADDRESS as string;
  const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_BASE);
  const { client } = useSmartWallets();
  const [isClaiming, setIsClaiming] = useState(false);
  const [combinedData, setCombinedData] = useState<any[]>([]);
  const blockscoutUrl = process.env.NEXT_PUBLIC_BLOCKSCOUT_URL;

  const { GetUserDashboard } = getBuiltGraphSDK();

  const { data } = useQuery({
    queryKey: ["UserDashboard"],
    async queryFn() {
      return await GetUserDashboard({
        userAddress: client?.account.address,
      });
    },
    enabled: !!client,
  });
  console.log(data);
  const abi = [
    "function tokenURI(uint256 tokenId) public view returns (string)",
  ];
  const contract = new ethers.Contract(contractAddress, abi, provider);

  // Function to fetch metadata for each voucher ID
  const fetchMetadata = async (voucherId: string) => {
    try {
      const tokenURI = await contract.tokenURI(voucherId);

      // Assuming tokenURI is a URL that returns JSON metadata
      const resolvedURI = tokenURI.startsWith("ipfs://")
        ? tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
        : tokenURI;

      const response = await fetch(resolvedURI);
      const metadata = await response.json();

      const imageUrl = metadata.image.startsWith("ipfs://")
        ? metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")
        : metadata.image;

      return { ...metadata, imageUrl };
    } catch (error) {
      console.error(
        `Error fetching metadata for token ID ${voucherId}:`,
        error
      );
      return null;
    }
  };

  const handleClaimToken = async (voucherId: string) => {
    try {
      setIsClaiming(true);
      const contractAddress = process.env
        .NEXT_PUBLIC_PERKLY_VOUCHER_ADDRESS as string;

      const abi = [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "voucherId",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];

      // Set up the provider (e.g., from Metamask or a JSON-RPC provider)
      const provider = new ethers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC_BASE
      );

      // Create a wallet/signer
      const wallet = new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIVATE_KEY_EOA_3 as string
      );
      const signer = wallet.connect(provider);

      // Create the contract instance
      const contract = new ethers.Contract(contractAddress, abi, signer);

      // Call the burn function
      console.log(`Burning token with ID: ${voucherId}`);
      const tx = await contract.burn(voucherId);
      console.log("Transaction submitted:", tx.hash);

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      console.log("Transaction confirmed:", receipt);
      setIsClaiming(false);
    } catch (error) {
      console.error("Error claiming token:", error);
    }
  };

  // Function to get events and fetch metadata for each voucher
  const loadVoucherData = async () => {
    try {
      console.log("loading evenet");
      const events = await getVoucherEvents();
      console.log(events, "events");
      if (events) {
        const voucherDataPromises = events.rows
          .filter((event: any) => {
            return (
              event.selectedrecipient === client?.account.address?.toLowerCase()
            );
          })
          .map(async (event: any) => {
            const metadata = await fetchMetadata(event.voucherid);
            return {
              selectedRecipient: event.selectedrecipient,
              voucherId: event.voucherid,
              metadata,
              imageUrl: metadata?.imageUrl || "",
            };
          });
        const voucherData = await Promise.all(voucherDataPromises);
        setVouchers(voucherData);
      }
    } catch (error) {
      console.error("Error loading voucher data:", error);
    }
  };

  // Load events and metadata when the component mounts
  useEffect(() => {
    if (client) {
      loadVoucherData();
    }
  }, [client]);

  useEffect(() => {
    if (data) {
      // Combine and tag data
      const combined = [
        ...data.spendingTrackeds.map((item: any) => ({
          ...item,
          type: "spendingTracked",
        })),
        ...data.userSubscribeds.map((item: any) => ({
          ...item,
          type: "userSubscribed",
        })),
        ...data.airdropCompleteds.map((item: any) => ({
          ...item,
          type: "airdropCompleted",
        })),
      ];

      // Sort by blockTimestamp (latest first)
      combined.sort(
        (a, b) => parseInt(b.blockTimestamp) - parseInt(a.blockTimestamp)
      );

      setCombinedData(combined);
    }
  }, [data]);

  return (
    <div className="space-y-4 p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        Welcome back
      </div>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Vouchers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vouchers.map(
                (voucher, index) =>
                  voucher.imageUrl && (
                    <VoucherCard
                      key={index}
                      voucher={voucher}
                      onClaim={handleClaimToken}
                    />
                  )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {combinedData.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded ${
                      item.type === "spendingTracked"
                        ? "bg-green-100"
                        : item.type === "userSubscribed"
                        ? "bg-blue-100"
                        : "bg-orange-100"
                    }`}
                  >
                    <div className="text-xl font-semibold">
                      {item.type === "spendingTracked"
                        ? "Spending Tracked"
                        : item.type === "userSubscribed"
                        ? "Subscribed to Merchant"
                        : "Received Airdrop"}
                    </div>
                    <div>
                      Merchant:{" "}
                      <a
                        href={`${blockscoutUrl}/address/${item.merchant}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {item.merchant}
                      </a>
                    </div>
                    {item.amountSpent && (
                      <div>Amount Spent: ${item.amountSpent / 100}</div>
                    )}
                    {item.voucherId && <div>Voucher ID: {item.voucherId}</div>}
                    <div className="text-sm mt-2">
                      Timestamp:
                      {new Date(
                        parseInt(item.blockTimestamp) * 1000
                      ).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
