import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface VoucherCardProps {
  voucher: {
    voucherId: string;
    metadata: any;
    imageUrl: string;
  };
  onClaim: (voucherId: string) => Promise<void>;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ voucher, onClaim }) => {
  const [isClaiming, setIsClaiming] = useState(false);

  const handleClaim = async () => {
    setIsClaiming(true);
    try {
      await onClaim(voucher.voucherId);
    } catch (error) {
      console.error("Error claiming voucher:", error);
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <Card className="border rounded-lg p-4 shadow flex flex-col">
      <h2 className="text-lg font-semibold">Voucher ID: {voucher.voucherId}</h2>
      {voucher.metadata ? (
        <div className="mt-2">
          <p>
            <strong>Name:</strong> {voucher.metadata.name}
          </p>
          <p>
            <strong>Description:</strong> {voucher.metadata.description}
          </p>
          {voucher.imageUrl && (
            <img
              src={voucher.imageUrl}
              alt={voucher.metadata.name}
              className="mt-2 w-full h-auto rounded-lg"
            />
          )}
        </div>
      ) : (
        <p className="text-sm text-gray-500">Metadata not available</p>
      )}
      <Button
        onClick={handleClaim}
        disabled={isClaiming}
        className={`${
          !isClaiming ? "bg-red-500" : "bg-black"
        } mt-4 w-fit text-white`}
      >
        {isClaiming ? "Claiming..." : "Claim"}
      </Button>
    </Card>
  );
};

export default VoucherCard;