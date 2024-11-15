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
import { CONSTANTS, PushAPI } from "@pushprotocol/restapi";
import { ethers } from "ethers";
import { Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NotificationStream = () => {
  const [notifications, setNotifications] = useState<any>([]);
  const streamInitialized = useRef(false);
  const [newNotification, setNewNotification] = useState(false);
  const signer = new ethers.Wallet(
    process.env.NEXT_PUBLIC_PRIVATE_KEY_EOA as string
  );

  useEffect(() => {
    let stream: any;

    const initStream = async () => {
      if (streamInitialized.current) return; // Skip if already initialized
      console.log("Initializing stream...");
      streamInitialized.current = true; // Mark as initialized
      const user = await PushAPI.initialize(signer, {
        env: CONSTANTS.ENV.STAGING,
      });

      // Fetch existing notifications from inbox
      const inboxNotifications = await user.notification.list("INBOX");
      const notifications = inboxNotifications.map((notification: any) => ({
        notification: {
          title: notification.title,
          body: notification.notification.body,
        },
      }));
      setNotifications(notifications);

      // Set up the WebSocket stream only in the current active tab
      stream = await user.initStream([CONSTANTS.STREAM.NOTIF], {
        filter: { channels: ["*"], chats: ["*"] },
        connection: { retries: 1 },
        raw: false,
      });

      // Listen for new notifications and broadcast them to other tabs
      stream.on(CONSTANTS.STREAM.NOTIF, (data: any) => {
        const newNotification = {
          notification: {
            title: data.message.payload.title,
            body: data.message.payload.body,
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
  }, []);

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
        <div className="p-4 space-y-4 overflow-y-auto h-3/4">
          {notifications.length === 0 && (
            <div className="text-center">No notifications yet!</div>
          )}
          {notifications.map((notif: any, index: any) => (
            <Card className="p-4" key={index}>
              <div className="mb-2">
                <p className="font-semibold">{notif.notification.title}</p>
                <p>{notif.notification.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationStream;
