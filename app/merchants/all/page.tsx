import { getMerchants } from "@/app/actions";
import MerchantCard from "./merchant-card";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { normalize } from "viem/ens";
import { publicClient } from "./client";

export default async function Page() {
  const merchants = await getMerchants();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Merchants</h1>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {merchants.map(async (merchant) => {
          const ensAddress = await publicClient.getEnsAddress({
            name: normalize(`${merchant.businessName}.adenteo.eth`),
          });
          const ensText = await publicClient.getEnsText({
            name: normalize(`${merchant.businessName}.adenteo.eth`),
            key: "Description",
          });
          return (
            <MerchantCard
              key={merchant.id}
              merchantName={merchant.businessName}
              merchantDescription={ensText!}
              merchantAddress={ensAddress!}
            />
          );
        })}
      </div>
    </div>
  );
}
