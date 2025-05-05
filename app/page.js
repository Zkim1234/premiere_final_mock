"use client";
import Image from "next/image";
import { Lexend } from "next/font/google";
import styles from "./page.module.css";
import { useState } from "react";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  //email, password, errors if there is no input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Please enter valid email address and/or format.";
    }
    if (!password.trim()) {
      newErrors.password =
        "Password does not match. Please enter correct password.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    if (type === "email") {
      setEmail(value);
      if (!value.trim()) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter valid email address and/or format.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    } else {
      setPassword(value);
      if (!value.trim()) {
        setErrors((prev) => ({
          ...prev,
          password: "Password does not match. Please enter correct password.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const handleLogin = () => {
    if (validateInputs()) {
      // Handle login logic here
      console.log("Login successful");
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={`${lexend.className} ${styles.mainText} ${styles.fadeInOut}`}
      >
        Find Fun and Save More!
      </div>

      {/* Login and create an account section */}
      <div className={styles.loginSection}>
        <div>
          <h1 className={styles.welcomeText}>Welcome to the Premiere</h1>
        </div>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleInputChange(e, "email")}
              className={styles.input}
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => handleInputChange(e, "password")}
              className={styles.input}
            />
            {errors.password && (
              <span className={styles.errorText}>{errors.password}</span>
            )}
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.button}
              onClick={handleLogin}
            >
              Login
            </button>
            <button type="button" className={styles.button}>
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
