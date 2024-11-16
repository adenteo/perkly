import { getMerchants } from "@/app/actions";
import MerchantCard from "./merchant-card";
import SearchMerchant from "./search-merchant";

export default async function Page() {
  const merchants = await getMerchants();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Merchants</h1>
      <SearchMerchant />
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {merchants.map((merchant) => {
          return (
            <MerchantCard
              key={merchant.id}
              merchantName={merchant.businessName}
              merchantAddress={merchant.walletAddress}
            />
          );
        })}
      </div>
    </div>
  );
}
