"use client";
import { Button } from "@/components/ui/button";
import { CONSTANTS, PushAPI } from "@pushprotocol/restapi";
import { ethers } from "ethers";

export default function SendNotification() {
  const signer = new ethers.Wallet(
    process.env.NEXT_PUBLIC_PRIVATE_KEY_EOA as string
  );
  const handleSendNotfication = async () => {
    const user = await PushAPI.initialize(signer, {
      env: CONSTANTS.ENV.STAGING,
    });
    const sendNotifRes = await user.channel.send(
      ["0x34979173eD20EB3DB3eD00b689Da5404199E28aD"],
      {
        notification: {
          title: "going to sleep",
          body: "Your cashback has been credited.",
        },
      }
    );
  };
  return (
    <div className="my-6 flex flex-col justify-center items-center">
      <Button onClick={handleSendNotfication} className="text-xl p-6">
        Send notification
      </Button>
    </div>
  );
}
