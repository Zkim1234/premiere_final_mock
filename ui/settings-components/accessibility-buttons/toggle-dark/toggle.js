import React, { useEffect } from "react";
import styles from "@/ui/settings-components/accessibility-buttons/toggle-dark/toggle.module.css";

export default function ToggleDark() {
  useEffect(() => {
    const toggleSwitch = document.querySelector(`.${styles.toggleSwitch}`);
    const toggleSlider = document.querySelector(`.${styles.toggleSlider}`);

    if (!toggleSwitch || !toggleSlider) return;

    // Set initial state from localStorage
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
      toggleSwitch.classList.add('active');
    }

    toggleSwitch.onclick = () => {
      const isActive = toggleSwitch.classList.toggle('active');
      document.body.classList.toggle("dark-mode", isActive);
      localStorage.setItem("darkMode", isActive);
    };

  }, []);

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleLabel}>Dark Mode</div>
      <div className={styles.toggleSwitch}>
        <div className={styles.toggleSlider}></div>
      </div>
    </div>
  );
}
