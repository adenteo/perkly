/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendNotification } from "@/app/actions";
import prisma from "@/lib/db"; // Assuming you're using Prisma for database interactions
import { CONSTANTS, PushAPI } from "@pushprotocol/restapi"; // For notifications
import { ethers } from "ethers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const transferEvent = body.find(
      (eventObj: any) => eventObj.data.event.name === "Transfer"
    );

    if (transferEvent) {
      // Destructure the address and tokenId from the "inputs" array of the Transfer event
      const toAddress = transferEvent.data.event.inputs.find(
        (input: any) => input.name === "to"
      )?.value;
      const tokenId = transferEvent.data.event.inputs.find(
        (input: any) => input.name === "tokenId"
      )?.value;
      const contractAddress = transferEvent.data.event.contract.address;

      // Store NFT ownership in the database
      await prisma.voucher.create({
        data: {
          id: tokenId,
          walletAddress: toAddress,
        },
      });

      // Send notification to the recipient
      await sendNotification(
        toAddress,
        `You received an voucher with Token ID: ${tokenId}`
        // CTA to see user profile page
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
