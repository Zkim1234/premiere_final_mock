import React, { useState } from "react";
import styles from "@/ui/SettingsComponents/AccessibilityButtonns/contrast-font/contrastFont.module.css";
import Image from "next/image";
import plusIcon from "@/public/settingsIcons/plus.svg";
import minusIcon from "@/public/settingsIcons/minus.svg";

export default function ContrastFont() {
  const [count, setCount] = useState(50);
  const [font, setFont] = useState(16);
  return (
    <div>
      <div>
        <h2 className={styles.subtitles}>Contrast</h2>
      </div>
      <div className={styles.contrastContainer}>
        <div className={styles.row}>
          <button
            className={styles.iconBtn}
            onClick={() => setCount(Math.max(0, count - 10))}
          >
            <Image src={minusIcon} alt="minus" width={32} height={32} />
          </button>
          <span className={styles.count}>{count}</span>
          <button
            className={styles.iconBtn}
            onClick={() => setCount(Math.min(150, count + 10))}
          >
            <Image src={plusIcon} alt="plus" width={32} height={32} />
          </button>
        </div>
        <button className={styles.resetBtn} onClick={() => setCount(50)}>
          Reset
        </button>
      </div>
      <div>
        <h2 className={styles.subtitles}>Font Size</h2>
      </div>
      <div className={styles.fontContainer}>
        <div className={styles.row}>
          <button
            className={styles.iconBtn}
            onClick={() => setFont(Math.max(5, font - 1))}
          >
            <Image src={minusIcon} alt="minus" width={32} height={32} />
          </button>
          <span className={styles.count}>{font}</span>
          <button
            className={styles.iconBtn}
            onClick={() => setFont(Math.min(30, font + 1))}
          >
            <Image src={plusIcon} alt="plus" width={32} height={32} />
          </button>
        </div>
        <button className={styles.resetBtn} onClick={() => setFont(16)}>
          Reset
        </button>
      </div>
    </div>
  );
}
