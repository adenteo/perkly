import { getBuiltGraphSDK } from "@/.graphclient";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { useQuery } from "@tanstack/react-query";
const { GetAirdropCompleteds } = getBuiltGraphSDK();

export default function RecentAirdrops() {
  const { client } = useSmartWallets();

  const { data } = useQuery({
    queryKey: ["AirdropData"],
    async queryFn() {
      return await GetAirdropCompleteds({
        merchantId: client!.account.address,
      });
    },
    enabled: !!client,
  });

  console.log(data);
  return <div>Recent Airdrops</div>;
}
