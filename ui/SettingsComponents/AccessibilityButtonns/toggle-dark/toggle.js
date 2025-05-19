import React, { useState, useEffect } from "react";
import styles from "@/ui/SettingsComponents/AccessibilityButtonns/toggle-dark/toggle.module.css";

export default function ToggleDark() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark-mode", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleLabel}>Dark Mode</div>
      <div
        className={`${styles.toggleSwitch} ${isDarkMode ? styles.active : ""}`}
        onClick={toggleDarkMode}
      >
        <div className={styles.toggleSlider}></div>
      </div>
    </div>
  );
}
