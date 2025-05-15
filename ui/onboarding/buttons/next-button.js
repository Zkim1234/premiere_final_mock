'use client';  
import styles from "./next-button.module.css";

export default function NextButton({ onClick, disabled = false, text}) {
  return (
    <button 
      className={`${styles.nextButton} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >  
      {text}
    </button>
  );
}