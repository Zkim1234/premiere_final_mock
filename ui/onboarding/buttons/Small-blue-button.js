import styles from "./Small-blue-button.module.css";

export default function SmallBlueButton({ onClick, disabled = false, text }) {
  return (
    <button
      className={`${styles.smallBlueButton} ${disabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
