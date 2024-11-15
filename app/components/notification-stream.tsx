/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useWallets } from "@privy-io/react-auth";
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { CONSTANTS, PushAPI } from "@pushprotocol/restapi";
import { ethers } from "ethers";
import { Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NotificationStream = () => {
  const [notifications, setNotifications] = useState<any>([]);
  const streamInitialized = useRef(false);
  const [newNotification, setNewNotification] = useState(false);
  const { client } = useSmartWallets();
  useEffect(() => {
    let stream: any;

    const initStream = async () => {
      if (streamInitialized.current || !client) return; // Skip if already initialized
      console.log("Initializing stream...");
      streamInitialized.current = true; // Mark as initialized
      const user = await PushAPI.initialize({
        env: CONSTANTS.ENV.STAGING,
        account: client.account.address,
      });

      const inbox = await user.notification.list("SPAM");
      const notifications = inbox.map((notification: any) => ({
        notification: {
          title: notification.title,
          body: notification.notification.body,
          image: notification.image,
          cta: notification.cta,
        },
      }));
      console.log(inbox);
      setNotifications(notifications);

      // Set up the WebSocket stream only in the current active tab
      stream = await user.initStream([CONSTANTS.STREAM.NOTIF], {
        filter: { channels: ["*"], chats: ["*"] },
        connection: { retries: 1 },
        raw: false,
      });

      // Listen for new notifications and broadcast them to other tabs
      stream.on(CONSTANTS.STREAM.NOTIF, (data: any) => {
        console.log("New notification", data);
        const newNotification = {
          notification: {
            title: data.message.payload.title,
            body: data.message.payload.body,
            image: data.message.payload.embed,
            cta: data.message.payload.cta,
          },
        };
        setNotifications((prev: any) => [newNotification, ...prev]);
        setNewNotification(true);
      });

      stream.connect();
    };

    initStream();

    return () => {
      // Disconnect the stream and close the channel on cleanup
      if (stream) {
        stream.disconnect();
      }
    };
  }, [client]);

  const handleSheetOpen = () => {
    setNewNotification(false); // Clear indicator when sheet is opened
  };
  return (
    <Sheet onOpenChange={handleSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <Bell />
          {newNotification && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>View the latest updates here!</SheetDescription>
        </SheetHeader>
        <div className="p-4 space-y-4 overflow-y-auto h-[90vh]">
          {notifications.length === 0 && (
            <div className="text-center">No notifications yet!</div>
          )}
          {notifications.map((notif: any, index: any) => (
            <Card className="p-4" key={index}>
              <div className="mb-2 flex justify-center items-center space-x-4">
                {notif.notification.image && (
                  <img
                    src={notif.notification.image}
                    className="w-16 h-16 rounded-md"
                    alt="notification"
                  />
                )}
                <div>
                  <p className="font-semibold">{notif.notification.title}</p>
                  <p>{notif.notification.body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationStream;
