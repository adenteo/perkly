import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import LeaderboardTransactions from "./leaderboard-transactions";
import request, { gql } from "graphql-request";
const query = gql`
  {
    spendingTrackeds {
      id
      merchant
      transactionHash
      user
      amountSpent
      blockTimestamp
    }
  }
`;
const url =
  "https://api.studio.thegraph.com/query/92897/chainlink/version/latest";

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["LeaderboardTransactions"],
    async queryFn() {
      return await request(url, query);
    },
  });
  return (
    <div>
      <div>Leaderboard page</div>;
      <HydrationBoundary state={dehydrate(queryClient)}>
        <LeaderboardTransactions />
      </HydrationBoundary>
    </div>
  );
}
