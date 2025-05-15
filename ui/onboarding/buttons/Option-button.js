"use client";
import { useState } from "react";
import styles from "./Option-button.module.css";

export default function OptionButton({ text, onClick }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onClick) onClick();
  };

  return (
    <div 
      className={`${styles.optionButton} ${isChecked ? styles.checked : ''}`} 
      onClick={handleClick}
    >
      <div className={styles.checkbox}></div>
      <span className={styles.text}>{text}</span>
    </div>
  );
}