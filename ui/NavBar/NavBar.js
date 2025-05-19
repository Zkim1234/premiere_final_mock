"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "@/ui/NavBar/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? styles.active : "";
  };

  return (
    <div className={styles.navContainer}>
      <div
        className={`${styles.navItem} ${isActive("/event")}`}
        onClick={() => router.push("/event")}
      >
        <img src="/navBarIcons/event_icon.svg" alt="Events" />
        <span>Events</span>
      </div>
      <div
        className={`${styles.navItem} ${isActive("/sales_page")}`}
        onClick={() => router.push("/sales_page")}
      >
        <img src="/navBarIcons/Tag.svg" alt="Sales" />
        <span>Sales</span>
      </div>
      <div
        className={`${styles.navItem} ${isActive("/homepage")}`}
        onClick={() => router.push("/homepage")}
      >
        <img src="/navBarIcons/House_01.svg" alt="Home" />
        <span>Home</span>
      </div>
      <div
        className={`${styles.navItem} ${isActive("/saved")}`}
        onClick={() => router.push("/saved")}
      >
        <img src="/navBarIcons/Bookmark.svg" alt="Saved" />
        <span>Saved</span>
      </div>
      <div
        className={`${styles.navItem} ${isActive("/settings-page")}`}
        onClick={() => router.push("/settings-page")}
      >
        <img src="/navBarIcons/Settings.svg" alt="Settings" />
        <span>Settings</span>
      </div>
    </div>
  );
}
