"use client";
import { Button } from "@/components/ui/button";
import { CONSTANTS, PushAPI } from "@pushprotocol/restapi";
import { ethers } from "ethers";

export default function SendNotification() {
  const signer = new ethers.Wallet(
    process.env.NEXT_PUBLIC_PRIVATE_KEY_EOA_2 as string
  );
  const handleSendNotfication = async () => {
    const user = await PushAPI.initialize(signer, {
      env: CONSTANTS.ENV.STAGING,
    });
    // const sendNotifRes = 
    await user.channel.send(
      ["0xd74D14101f78Cf38318dA300E070FB31AA5C0Cf3"],
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
