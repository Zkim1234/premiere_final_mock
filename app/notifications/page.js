"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NotificationCard from "@/ui/NotificationComponent/NewNotif";
import styles from "@/app/notifications/notifications.module.css";
import ReminderNotif from "@/ui/NotifReminder/Reminder";
import NavBar from "@/ui/NavBar/NavBar";
export default function Notifications() {
  const router = useRouter();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.reminderButton}>
        <ReminderNotif onClick={() => router.push("/tutorial")} />
      </div>
      <div className={styles.notificationContainer}>
        <h1 className={styles.notificationTitle}>Notifications</h1>
        <div>
          <NotificationCard
            image="images\zaraCargian.jpg"
            alt="ZARA Cardigan"
            name="ZARA"
            tag="NEW!"
            text="you can enjoy 20% off your purchase of the Cotton-Wool Cardigan — the perfect layering piece for any season."
          />
        </div>
        <div>
          <NotificationCard
            image="images\richmond_night_market.jpg"
            alt="Richmond Night Market"
            name="Upcoming Event: Richmond Night Market"
            tag="NEW!"
            text="You have an Upcoming event on May 29, 2025 for the Richmond night market"
          />
        </div>
        <div>
          <NotificationCard
            image="images\blossomafterdark.jpg"
            alt="blossomafterdark"
            name="Blossoms After Dark"
            tag="NEW!"
            text="🌸 Celebrate the beauty of cherry blossoms at Blossoms After Dark! ✨ Get your tickets for 30% off. Limited spots available!"
          />
        </div>
        <div>
          <NotificationCard
            image="images\Sony_headphones.jpeg"
            alt="Sony WH-CH720N "
            name="Sony WH-CH720N "
            text="Get the Sony WH-CH720N Noise-Canceling Headphones for ONLY $149.99 (was $249.99)! 🔥"
          />
        </div>
        <div>
          <NotificationCard
            image="images\Popeyes-Logo.png"
            alt="Popeyes"
            name="Popeyes"
            text="Craving something delicious? Get 20% off on Popeyes Wings for a limited time!"
          />
        </div>
        <div>
          <NotificationCard
            image="images\blenz.jpg"
            alt="Blenz Coffee"
            name="Blenz Coffee"
            text="Treat yourself to something sweet and delicious at Blenz Coffee! Enjoy 10% off all pastries."
          />
        </div>
      </div>
      <div className={styles.navBar}>
        <NavBar />
      </div>
    </div>
  );
}
