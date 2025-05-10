import React from "react";
import styles from "@/ui/notification-component/new-notif.module.css";

export default function NotificationCard({ image, alt, name, tag, text }) {
  const cardClass =
    tag === "NEW!"
      ? styles.notificationCardNew
      : styles.notificationCardDefault;
  return (
    <div className={cardClass}>
      <img src={image} alt={alt} className={styles.notificationImage} />
      <div className={styles.notificationContent}>
        <div className={styles.notificationHeader}>
          <h2 className={styles.brandName}>{name}</h2>
          {tag && <span className={styles.newTag}>{tag}</span>}
        </div>
        <p className={styles.notificationText}>{text}</p>
      </div>
    </div>
  );
}
