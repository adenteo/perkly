/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import SendNotification from "@/app/components/notification-send";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import useMultiBaas from "../../hooks/use-multibaas";

interface Voucher {
  selectedRecipient: string;
  voucherId: string;
  metadata: any;
  imageUrl: string;
}

export default function UserProfile() {
  const { getVoucherEvents } = useMultiBaas();
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const contractAddress = "0x0806CDF4498dFed2D1e066af2F23E6a87D798dDC";
  const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_BASE);
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

  // Function to get events and fetch metadata for each voucher
  const loadVoucherData = async () => {
    try {
      console.log("loading evenet");
      const events = await getVoucherEvents();
      console.log("got evenet");
      if (events) {
        console.log(events, "int evenets");
        const voucherDataPromises = events.rows.map(async (event: any) => {
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
    loadVoucherData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Voucher Tokens</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vouchers.map((voucher, index) => (
          <div key={index} className="border rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold">
              Voucher ID: {voucher.voucherId}
            </h2>
            <p>Recipient: {voucher.selectedRecipient}</p>
            {voucher.metadata ? (
              <div className="mt-2">
                <p>
                  <strong>Name:</strong> {voucher.metadata.name}
                </p>
                <p>
                  <strong>Description:</strong> {voucher.metadata.description}
                </p>
                {voucher.imageUrl && (
                  <img
                    src={voucher.imageUrl}
                    alt={voucher.metadata.name}
                    className="mt-2 w-full h-auto rounded-lg"
                  />
                )}{" "}
              </div>
            ) : (
              <p className="text-sm text-gray-500">Metadata not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
