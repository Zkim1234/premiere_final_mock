"use client";
import Image from "next/image";
import { Lexend } from "next/font/google";
import styles from "./page.module.css";
import { useState } from "react";
import NextButton from "@/ui/onboarding/buttons/next-button";
import Input from "@/ui/onboarding/form/Input";
import { useRouter } from "next/navigation";
import SmallWhiteButton from "@/ui/onboarding/buttons/Small-white-button";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  //email, password, errors if there is no input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [showCreateAccount, setShowCreateAccount] = useState(false);

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
    } else if (type === "password") {
      setPassword(value);
      if (!value.trim()) {
        setErrors((prev) => ({
          ...prev,
          password: "Password does not match. Please enter correct password.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    } else if (type === "name") {
      setName(value);
    }
  };

  const handleLogin = () => {
    if (validateInputs()) {
      console.log("Login successful");
      //router.push("/home");
    }
  };

  const handleCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const handleBackToLogin = () => {
    setShowCreateAccount(false);
  };

  return (
    <div className={styles.container}>
      {!showCreateAccount ? (
        // Login section
        <div className={styles.loginSection}>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/logos/large-logo.svg"
              alt="logo"
              width={90}
              height={90}
              margin={10}
              className="w-full h-full object-contain"
            />
            <h1 className={styles.welcomeText}>Welcome to the Premiere</h1>
          </div>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <Input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => handleInputChange(e, "email")}
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email}</span>
              )}
            </div>
            <div className={styles.inputContainer}>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => handleInputChange(e, "password")}
              />
              {errors.password && (
                <span className={styles.errorText}>{errors.password}</span>
              )}
            </div>
          </form>
          <div className={styles.buttonContainer}>
            <NextButton onClick={handleLogin} text="Login" />
            <NextButton
              onClick={handleCreateAccount}
              text="Create an account"
            />
          </div>
        </div>
      ) : (
        // Create account section
        <div className={styles.loginSection}>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/logos/medium-logo.svg"
              alt="logo"
              width={100}
              height={100}
              margin={10}
              className="w-full h-full object-contain"
            />
            <h1 className={styles.welcomeText}>Create an Account</h1>
          </div>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <Input
                type="text"
                placeholder="First Name (required)"
                value={name}
                onChange={(e) => handleInputChange(e, "name")}
              />
              <Input
                type="text"
                placeholder="Last Name (required)"
                value={name}
                onChange={(e) => handleInputChange(e, "name")}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
                type="text"
                placeholder="Email (required)"
                value={email}
                onChange={(e) => handleInputChange(e, "email")}
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email}</span>
              )}
            </div>
            <div className={styles.inputContainer}>
              <Input
                type="password"
                placeholder="Enter your password (required)"
                value={password}
                onChange={(e) => handleInputChange(e, "password")}
              />
              {errors.password && (
                <span className={styles.errorText}>{errors.password}</span>
              )}
              <Input
                type="password"
                placeholder="Confirm your password (required)"
                value={password}
                onChange={(e) => handleInputChange(e, "password")}
              />
            </div>
          </form>
          <div className={styles.buttonContainer}>
            <NextButton
              text="Create an account"
              onClick={() => router.push("/tutorial")}
            />
            <SmallWhiteButton
              text="Back to Login"
              onClick={handleBackToLogin}
            />
          </div>
        </div>
      )}
    </div>
  );
}
