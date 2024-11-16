"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useEnsAddress } from "wagmi";
import { normalize } from "viem/ens";
import { baseSepolia, sepolia } from "viem/chains";
import { publicClient } from "../merchants/dashboard/client";

export default function VerifyPage() {
  // const handleOnClick = async () => {
  //   setAddress(user.address);
  //   setDescription(user.description);
  // };
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const getMerchantDescription = async () => {
    const ensAddress = await publicClient.getEnsAddress({
      name: normalize(`${username}.perkly.eth`),
    });
    const ensDescription = await publicClient.getEnsText({
      name: normalize(`${username}.perkly.eth`),
      key: "Description",
    });
    setDescription(ensDescription!);
    setAddress(ensAddress!);
  };
  return (
    <Card className="p-6 my-4 space-y-4">
      <div className="font-bold">Verify Merchant/User</div>
      <p className="text-sm">
        Before making high-valued transactions, you can ensure that the
        addresses are verified on Perkly.
      </p>
      <Input
        placeholder="Merchant Name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={async () => await getMerchantDescription()}>
        Verify
      </Button>
      {address && description && (
        <div>
          <div className="font-bold">Verified Address</div>
          <div>{address}</div>
          <div className="font-bold">Description</div>
          <div>{description}</div>
        </div>
      )}
    </Card>
  );
}
