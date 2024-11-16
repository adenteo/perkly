"use client";
import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { HandCoins } from "lucide-react";
import Image from "next/image";
import { useBalance } from "wagmi";
import Perkly from "../assets/Perkly.svg";
import NotificationStream from "./components/notification-stream";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { client } = useSmartWallets();
  const router = useRouter();

  const perklyToken = useBalance({
    address: client?.account.address,
    token: "0x5323Ccb8a30A7dF961d7fCfacA2924C678d32B2D",
  });
  console.log(perklyToken.data);

  const { ready, authenticated, login, logout } = usePrivy();

  const disableLogin = !ready || (ready && authenticated);
  const disableLogout = !ready || (ready && !authenticated);

  return (
    <div className="flex justify-between items-center">
      <Image src={Perkly} alt="perkly" width={60} height={60}></Image>
      {/* <DynamicWidget /> */}
      {!authenticated && (
        <Button disabled={disableLogin} onClick={login}>
          Log in
        </Button>
      )}
      {authenticated && (
        <div className="flex justify-center items-center space-x-2">
          <NotificationStream />
          <p
            className="bg-[#EC7785] rounded-lg p-2 flex justify-center items-center font-semibold cursor-pointer"
            onClick={() => router.push("/users/profile")}
          >
            <HandCoins className="inline" />
            {perklyToken.data?.formatted || 0}
          </p>
          <Button disabled={disableLogout} onClick={logout}>
            Log out
          </Button>
        </div>
      )}
      {/* {status === "success" && <div>{data}</div>} */}
    </div>
  );
};

export default Navbar;
