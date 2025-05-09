"use client";
import NotificationCard from "@/ui/notification-component/new-notif";
import styles from "@/app/notifications/notifications.module.css";
import ReminderNotif from "@/ui/notif-reminder/reminder";

export default function Notifications() {
  return (
    <div>
      <ReminderNotif />
      <div>
        <NotificationCard
        image="/images/zara-cardigan.png"
         name="ZARA" 
         tag="NEW!" 
         text="you can enjoy 20% off your purchase of the Cotton-Wool Cardigan — the perfect layering piece for any season." />
      </div>
      <div>
        <NotificationCard />
      </div>
      <div>
        <NotificationCard />
      </div>
      <div>
        <NotificationCard />
      </div>
    </div>
  );
}
