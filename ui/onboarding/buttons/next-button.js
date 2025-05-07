'use client';  
import styles from "./next-button.module.css";

export default function NextButton({ onClick, disabled = false }) {
  return (
    <button 
      className={`${styles.nextButton} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >  
      Next
    </button>
  );
}