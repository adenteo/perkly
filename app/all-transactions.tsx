"use client";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";
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
export default function AllTransactions() {
  const { data } = useQuery<any>({
    queryKey: ["OverallData"],
    async queryFn() {
      return await request(url, query);
    },
  });
  console.log(data);
  const transactionCount = data?.spendingTrackeds.length;
  const totalAmount = data?.spendingTrackeds.reduce(
    (acc: any, tx: any) => acc + parseInt(tx.amountSpent) / 100,
    0
  );
  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
      <Card className="flex flex-col justify-center items-center p-6">
        <div className="text-4xl font-bold">{transactionCount}</div>
        <div className="text-center">transactions recorded</div>
      </Card>
      <Card className="flex flex-col justify-center items-center p-6">
        <div className="text-4xl font-bold">${totalAmount}</div>
        <div className="text-center">total cashback awarded</div>
      </Card>
    </div>
  );
}
