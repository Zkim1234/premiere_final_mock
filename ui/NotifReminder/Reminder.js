import React from "react";
import styles from "@/ui/NotifReminder/Reminder.module.css";

export default function ReminderNotif({ onClick }) {
  return (
    <button className={styles.reminderCard} onClick={onClick}>
      <div className={styles.reminderContent}>
        <div className={styles.iconRow}>
          <span className={styles.bellIcon}>
            <img src="/Bell_Black.svg" alt="Reminder" width={23} height={25} />
          </span>
          <span className={styles.reminderText}>Reminder</span>
        </div>
        <div className={styles.surveyText}>
          You still haven't done your survey. <br />
          Click here to personalize your feed!
        </div>
      </div>
      <span className={styles.arrowIcon}>
        <img src="/Arrow_down.svg" alt="Arrow" width={10} height={20} />
      </span>
    </button>
  );
}
