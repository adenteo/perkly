/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/lib/db"; // Assuming you're using Prisma for database interactions
import { sendNotification } from "@/app/actions";
import { ethers } from "ethers";

export async function POST(req: Request) {
  try {
    console.log("received webhook");
    const body = await req.json();
    const transferEvent = body.find(
      (eventObj: any) => eventObj.data.event.name === "AirdropCompleted"
    );
    console.log("transferEvent");
    if (transferEvent) {
      // Destructure the address and tokenId from the "inputs" array of the Transfer event
      const toAddress = transferEvent.data.event.inputs.find(
        (input: any) => input.name === "selectedRecipient"
      )?.value;
      const tokenId = transferEvent.data.event.inputs.find(
        (input: any) => input.name === "voucherId"
      )?.value;
      console.log(toAddress, tokenId, "toAddress, tokenId");
      const contractAddress = transferEvent.data.event.contract.address;
      console.log(contractAddress, "contractAddress");
      // Store NFT ownership in the database
      await prisma.voucher.create({
        data: {
          id: tokenId!,
          walletAddress: toAddress!,
        },
      });
      console.log("created on primsa");

      const provider = new ethers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC_BASE
      );
      const abi = [
        "function tokenURI(uint256 tokenId) public view returns (string)",
      ];
      const contract = new ethers.Contract(contractAddress, abi, provider);

      // Fetch the token URI
      const tokenURI = await contract.tokenURI(tokenId);
      console.log(`Fetched token URI: ${tokenURI}`);

      const resolvedURI = tokenURI.startsWith("ipfs://")
        ? tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
        : tokenURI;

      // Fetch the metadata from the token URI
      const metadataResponse = await fetch(resolvedURI);
      const metadata = await metadataResponse.json();

      // Log metadata for debugging
      console.log("Fetched metadata:", metadata);

      // Send notification to the recipient
      await sendNotification(
        toAddress,
        `Voucher ID: ${tokenId}\n ${metadata.description}`
      );

      return new Response(JSON.stringify({ status: "success" }), {
        status: 200,
      });
    } else {
      return new Response(
        JSON.stringify({ error: "No Transfer event found" }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
