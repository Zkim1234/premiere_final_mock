'use client';
import Image from 'next/image';
import styles from './post-header.module.css';

export default function HeaderBar({ title = 'Post', onBack }) {
  return (
    <div className={styles.headerWrapper}>
      <button className={styles.backButton} onClick={onBack}>
        <Image src="/next.svg" alt="Back" width={24} height={24} />
      </button>

      <div className={styles.pageTitle}>{title}</div>

      <div className={styles.logoWrapper}>
        <Image src="/logos/small-logo.svg" alt="Premiere" width={100} height={30} />
      </div>
    </div>
  );
}
//
