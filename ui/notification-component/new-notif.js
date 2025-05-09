import React from "react";
import styles from "@/ui/notification-component/new-notif.module.css";

export default function NotificationCard(image,name,tag,text) {
  return (
    <div className={styles.notificationCard}>
      <img
        src={image}
        alt="zara cardigan"
        className={styles.notificationImage}
      />
      <div className={styles.notificationContent}>
        <div className={styles.notificationHeader}>
          <h2 className={styles.brandName}>{name}</h2>
          <span className={styles.newTag}>{tag}</span>
        </div>
        <p className={styles.notificationText}>
          {text}
        </p>
      </div>
    </div>
  );
}
