"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const router = useRouter();
  return (
    <div className="my-6 flex flex-col justify-center items-center">
      <Button
        className="text-xl p-6"
        onClick={() => router.push("/merchants/all")}
      >
        Start my loyalty journey
      </Button>
      <Button
        variant={"link"}
        className="text-md mt-2"
        onClick={() => router.push("/merchants/onboarding")}
      >
        Join Perkly as a merchant <ChevronRight className="inline" />
      </Button>
    </div>
  );
}
