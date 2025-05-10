"use client";
import styles from "./Skip-button.module.css";

export default function SkipButton({ onClick }) {
  return (
    <button className={styles.skipButton} onClick={onClick}>
      Skip
    </button>
  );
}
