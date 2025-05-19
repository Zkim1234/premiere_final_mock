'use client';
import Image from 'next/image';
import styles from './post-header.module.css';
import { useRouter } from 'next/navigation';

export default function HeaderBar({ title = 'Post', onBack }) {
  const router = useRouter();
  return (
    <div className={styles.headerWrapper}>
      <button className={styles.backButton} onClick={onBack}>
        <img src="/blue_arrow.svg" alt="Back" />
      </button>

      <div className={styles.pageTitle}>{title}</div>

      <div className={styles.logoWrapper}>
        <img src="/logos/small-logo.svg" alt="Premiere" onClick={() => router.push('/homepage')}/>
      </div>
    </div>
  );
}
//
