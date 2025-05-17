"use client";
import React from "react";
import styles from "@/app/settings-page/settings.module.css";
import SettingsButton from "@/ui/SettingsComponents/SettingsButton/settings-button";
import NavBar from "@/ui/NavBar/NavBar";
import NextButton from "@/ui/onboarding/buttons/next-button";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  return (
    <div className={styles.pageContainer}>
      <div>
        <h4 className={styles.settingsTitle}>Settings</h4>
      </div>

      <div className={styles.settingsContainer}>
        <div onClick={() => router.push("/settings-page/accessibility")}>
          <SettingsButton
            image="settingsIcons\accessible_forward.svg"
            alt="accessibility"
            text="Accessibility Settings"
            arrow="\Arrow_down.svg"
            arrowAlt="arrow"
          />
        </div>
        <div onClick={() => router.push("/tutorial")}>
          <SettingsButton
            image="settingsIcons\ic24-unlock.svg"
            alt="personalization"
            text="Personalization"
            arrow="\Arrow_down.svg"
            arrowAlt="arrow"
          />
        </div>
        <div onClick={() => router.push("/settings-page/accessibility")}>
          <SettingsButton
            image="settingsIcons\ic24-help.svg"
            alt="help"
            text="Help Center"
            arrow="\Arrow_down.svg"
            arrowAlt="arrow"
          />
        </div>
        <div onClick={() => router.push("/settings-page/accessibility")}>
          <SettingsButton
            image="settingsIcons\Info.svg"
            alt="about"
            text="About"
            arrow="\Arrow_down.svg"
            arrowAlt="arrow"
          />
        </div>
        <div onClick={() => router.push("/settings-page/accessibility")}>
          <SettingsButton
            image="settingsIcons\file_copy.svg"
            alt="terms"
            text="Terms & Conditions "
            arrow="\Arrow_down.svg"
            arrowAlt="arrow"
          />
        </div>
      </div>
      <div onClick={() => router.push("/")}>
        <h4 className={styles.deleteAccount}>Delete Account</h4>
      </div>
      <div>
        <NavBar />
      </div>
      <div className={styles.logOutButtonContainer}>
        <NextButton onClick={() => router.push("/")} text="Log Out" />
      </div>
    </div>
  );
}
