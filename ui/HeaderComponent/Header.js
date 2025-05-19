"use client";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";

export default function Header({ sectionTitle = "Featured This Month" }) {
  const router = useRouter();
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div
          className={styles.locationMenu}
          onClick={() => router.push("/settings-page")}
        >
          <span className={styles.locationText}>Location</span>
          <img src="/white_arrow.svg" />
        </div>
        <div className={styles.icons}>
          <img src="/search_icon.svg" onClick={() => router.push("/event")} />
          <img src="/Bell.svg" onClick={() => router.push("/notifications")} />
        </div>
      </div>

      <div className={styles.sectionTitle}>
        <h2>{sectionTitle}</h2>
      </div>
    </div>
  );
}
