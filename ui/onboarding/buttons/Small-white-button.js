import styles from "./Small-white-button.module.css";

export default function SmallWhiteButton({ onClick, disabled = false, text }) {
  return (
    <button
      className={`${styles.smallWhiteButton} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
