"use client";
import React from "react";
import styles from "@/app/settings-page/accessibility/accessibility.module.css";
import { useRouter } from "next/navigation"; 
import ToggleDark from "@/ui/settings-components/accessibility-buttons/toggle-dark/toggle";
import ContrastFont from "@/ui/settings-components/accessibility-buttons/contrast-font/contrastFont";

export default function AccessibilityPage() {
  const router = useRouter();
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerRow}>
        <img src="/Arrow_down.svg" alt="back" onClick={() => router.back()}/>
        <h1 className={styles.accessibilityTitle}>Accessibility</h1>
      </div>
        <div className={styles.darkModeContainer}>
         <ToggleDark />
        </div>
        <div className={styles.contrastFontContainer}>
            <ContrastFont />
        </div>
    </div>
  );
}
