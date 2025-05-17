import React from "react";
import styles from "./settings.module.css";

export default function SettingsButton({ image, alt, text, arrow, arrowAlt }) {
  return (
    <button className={styles.settingsButton}>
      <span className={styles.leftContent}>
        <img src={image} alt={alt} />
        <p className={styles.settingName}>{text}</p>
      </span>
      <div>
        <img src={arrow} alt={arrowAlt} className={styles.arrow} />
      </div>
    </button>
  );
}
