"use client";
import styles from "./Yes-No-button.module.css";

export default function YesNoButton({ text, isSelected, onClick }) {
  return (
    <div
      className={`${styles.button} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
