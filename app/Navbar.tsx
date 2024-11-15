"use client";
import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";
import { HandCoins } from "lucide-react";
import Image from "next/image";
import Perkly from "../assets/Perkly.svg";

const Navbar = () => {
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
          {/* <NotificationStream /> */}
          <p className="bg-[#EC7785] rounded-lg p-2 flex justify-center items-center font-semibold">
            <HandCoins className="inline" />
            {/* {perklyToken.data?.formatted || 0} */}
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
