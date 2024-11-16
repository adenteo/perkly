"use client";
import { getBuiltGraphSDK } from "@/.graphclient";
import { useQuery } from "@tanstack/react-query";

export default function LeaderboardTransactions() {
  const { GetSubscriberSpendings } = getBuiltGraphSDK();

  const { data } = useQuery({
    queryKey: ["LeaderboardTransactions"],
    async queryFn() {
      return await GetSubscriberSpendings();
    },
  });

  return (
    <div>
      {data?.spendingTrackeds.map((item) => (
        <div>{item.amountSpent}</div>
      ))}
    </div>
  );
}
