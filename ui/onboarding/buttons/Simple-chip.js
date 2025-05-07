"use client";
import { useState } from "react";
import styles from "@/ui/onboarding/buttons/Simple-chip.module.css";

export default function SimpleChip({ text, onClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick();
  };

  return (
    <div
      className={`${styles.chip} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}
