import Perkly from "@/assets/Perkly.svg";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { gql, request } from "graphql-request";
import Image from "next/image";
import AllTransactions from "./all-transactions";
import Onboarding from "./onboarding";
const query = gql`
  {
    merchants {
      id
    }
    spendingTrackeds {
      amountSpent
    }
  }
`;
const url =
  "https://api.studio.thegraph.com/query/92897/perklysubscription/version/latest";
export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["OverallData"],
    async queryFn() {
      return await request(url, query);
    },
  });
  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <div className="text-2xl lg:text-4xl font-semibold text-center p-6 lg:p-20">
        Unleash rewards and elevate your loyalty journey with
        <span>
          <Image
            className="inline mx-4"
            src={Perkly}
            alt="perkly"
            width={150}
            height={150}
          ></Image>
        </span>
      </div>
      <Onboarding />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AllTransactions />
      </HydrationBoundary>
    </div>
  );
}
