"use server";
import { RegistrarABI } from "@/contracts/abis/registrarABI";
import { ethers } from "ethers";
import prisma from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { CONSTANTS, PushAPI } from "@pushprotocol/restapi";

export const addMerchantENS = async (
  merchantName: string,
  merchantAddress: string
) => {
  const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_BASE);

  const wallet = new ethers.Wallet(
    process.env.NEXT_PUBLIC_PRIVATE_KEY_EOA as string
  );
  const signer = wallet.connect(provider);

  const registrarContract = new ethers.Contract(
    "0x7e92dFD73bE79ed147AD58Ff5b2095416b67F720",
    RegistrarABI,
    signer
  );

  const registerTx = await registrarContract.register(
    merchantName,
    merchantAddress
  );

  await registerTx.wait();

  return;
};

export const addMerchant = async (username: string, walletAddress: string) => {
  const merchant = await prisma.merchant.create({
    data: {
      businessName: username,
      walletAddress,
      apiKey: uuidv4(),
    },
  });
  return merchant;
};

// Function to send notifications via Push Protocol
export async function sendNotification(toAddress: string, message: string) {
  const signer = new ethers.Wallet(
    process.env.NEXT_PUBLIC_PRIVATE_KEY_EOA_2 as string
  );
  const user = await PushAPI.initialize(signer, {
    env: CONSTANTS.ENV.STAGING,
  });
  console.log("trying to send msg")
  await user.channel.send([toAddress], {
    notification: {
      title: "🎉 You've received a voucher! 🎉 \n",
      body: message,
    },
  });
}

export const fetchMerchant = async (walletAddress: string) => {
  const merchant = await prisma.merchant.findUnique({
    where: { walletAddress },
  });
  return merchant;
};
