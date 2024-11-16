"use client";

// import SendNotification from "@/app/components/notification-send";
import { Button } from "@/components/ui/button";
import useMultiBaas from "../../hooks/use-multibaas";

export default function Page() {
  const {
    getMultiplier,
    rollNewMultiplier,
    initiateAirdrop,
    getVoucherEvents,
  } = useMultiBaas();

  const handleInitiateAirdrop = async () => {
    console.log("clicked");
    const txn = await initiateAirdrop(
      [
        "0x34979173ed20eb3db3ed00b689da5404199e28ad",
        "0x6e8f63FB1009f2717aE49F288A9407C3557D428C",
        "0x72C209D54f5b0772b50FEfe7107E3e6ED63194fa",
      ],
      "bafkreigqpzbkmexkmx42txx5tgoaqaasme7zv46u43xxlpid7spov3vasi"
    );
    console.log(txn);
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
