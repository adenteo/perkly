"use client";

// import SendNotification from "@/app/components/notification-send";
import { Button } from "@/components/ui/button";
import useMultiBaas from "../../hooks/use-multibaas";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { ethers } from "ethers";

export default function Page() {
  const {
    getMultiplier,
    rollNewMultiplier,
    initiateAirdrop,
    getVoucherEvents,
  } = useMultiBaas();

  const handleInitiateAirdrop = async () => {
    // if (!client) return;
    console.log("clicked");
    const txn = await initiateAirdrop(
      "0x34979173ed20eb3db3ed00b689da5404199e28ad",
      [
        "0x34979173ed20eb3db3ed00b689da5404199e28ad",
        "0x6e8f63FB1009f2717aE49F288A9407C3557D428C",
        "0x72C209D54f5b0772b50FEfe7107E3e6ED63194fa",
      ],
      "bafkreigqpzbkmexkmx42txx5tgoaqaasme7zv46u43xxlpid7spov3vasi"
    );

    const provider = new ethers.JsonRpcProvider(
      "https://base-sepolia.g.alchemy.com/v2/Kj6gL2WIT6LCpP2xoL4qaelgB9ZBG-27"
    );

    const wallet = new ethers.Wallet(
      process.env.NEXT_PUBLIC_PRIVATE_KEY_EOA as string
    );
    const signer = wallet.connect(provider);

    const tx = await signer.sendTransaction(txn as any);
    console.log(tx);

    // await client.sendTransaction(txn as any);
  };

  const handleGetMultiplier = async () => {
    console.log("clicked");
    // console.log(getMultiplier)
    const num = await getMultiplier();
    console.log(num);
  };

  const handleGetVoucherEvents = async () => {
    console.log("clicked");
    // console.log(getMultiplier)
    const obj = await getVoucherEvents();
    console.log(obj);
  };

  const handleRollNewMultiplier = async () => {
    console.log("clicked");
    const txn = await rollNewMultiplier(
      "0x34979173eD20EB3DB3eD00b689Da5404199E28aD"
    );
    console.log(txn);
  };

  return (
    <div>
      <Button
        onClick={async () => {
          await handleRollNewMultiplier();
        }}
      >
        Roll New Multiplier
      </Button>
      <Button
        onClick={async () => {
          await handleGetMultiplier();
        }}
      >
        Get Multiplier
      </Button>
      <Button
        onClick={async () => {
          await handleInitiateAirdrop();
        }}
      >
        Initiate Airdrop
      </Button>
      <Button
        onClick={async () => {
          await handleGetVoucherEvents();
        }}
      >
        Event Query
      </Button>
    </div>
  );
}
