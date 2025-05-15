import React from "react";
import styles from "./input.module.css";

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
