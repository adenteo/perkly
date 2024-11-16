import { GetAirdropCompletedsQuery } from "@/.graphclient";
import { Card } from "@/components/ui/card";

interface RecentAirdropsProps {
  data: GetAirdropCompletedsQuery | undefined;
}

export default function RecentAirdrops({ data }: RecentAirdropsProps) {
  return (
    <div>
      {data?.airdropCompleteds.map((item) => {
        return (
          <Card key={item.blockTimestamp} className="p-2 mt-3">
            <div className="font-semibold">
              Recipient: {item.selectedRecipient}
            </div>
            <div>
              {" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              }).format(new Date(parseInt(item.blockTimestamp) * 1000))}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
