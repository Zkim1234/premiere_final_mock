"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/ui/nav-bar/nav-bar.module.css";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("Home"); 
  const router = useRouter();

  const handleNavigation = (item, path) => {
    setActiveItem(item);
    router.push(path);
  };

  return (
    <div className={styles.navContainer}>
      <div
        className={`${styles.navItem} ${
          activeItem === "Events" ? styles.active : ""
        }`}
        onClick={() => handleNavigation("Events", "/events")}
      >
        <img src="/navBarIcons/event_icon.svg" alt="Events" />
        <span>Events</span>
      </div>
      <div
        className={`${styles.navItem} ${
          activeItem === "Sales" ? styles.active : ""
        }`}
        onClick={() => handleNavigation("Sales", "/sales")}
      >
        <img src="/navBarIcons/Tag.svg" alt="Sales" />
        <span>Sales</span>
      </div>
      <div
        className={`${styles.navItem} ${
          activeItem === "Home" ? styles.active : ""
        }`}
        onClick={() => handleNavigation("Home", "/")}
      >
        <img src="/navBarIcons/House_01.svg" alt="Home" />
        <span>Home</span>
      </div>
      <div
        className={`${styles.navItem} ${
          activeItem === "Saved" ? styles.active : ""
        }`}
        onClick={() => handleNavigation("Saved", "/saved")}
      >
        <img src="/navBarIcons/Bookmark.svg" alt="Saved" />
        <span>Saved</span>
      </div>
      <div
        className={`${styles.navItem} ${
          activeItem === "Settings" ? styles.active : ""
        }`}
        onClick={() => handleNavigation("Settings", "/settings")}
      >
        <img src="/navBarIcons/Settings.svg" alt="Settings" />
        <span>Settings</span>
      </div>
    </div>
  );
}
