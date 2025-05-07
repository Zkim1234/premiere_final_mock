"use client";
import styles from "./progress-bar.module.css";

export default function ProgressBar({ currentStep = 1 }) {
  const totalSteps = 5;

  return (
    <div className={styles.progressBar}>
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`${styles.step} ${
            index === currentStep - 1
              ? styles.active
              : index > currentStep - 1
              ? styles.inactive
              : ""
          }`}
        />
      ))}
    </div>
  );
}
