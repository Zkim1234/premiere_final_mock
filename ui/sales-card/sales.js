import React from 'react';
import styles from './sales.module.css';

export default function SalesCard ({image, alt, brandName, text, offer}){
  return (
    <div className={styles.salesCard}>
      <div className={styles.bookmarkIcon}>
        <img src="/unsaved_Icon.svg" alt="bookmark"/>
      </div>
      <div className={styles.salesCardContent}>
        <div className={styles.logoSection}>
          <img 
            src={image}
            alt={alt}
            className={styles.logo}
          />
        </div>
        <div className={styles.offerSection}>
          <h2 className={styles.brandName}>{brandName}</h2>
          <p className={styles.offerText}>{text}</p>
        </div>
      </div>
      <div className={styles.actionsSection}>
        <button className={styles.moreOptionsButton}>
          <span className={styles.dots}>•••</span>
        </button>
        <div className={styles.offerButton}>{offer}</div>
      </div>
    </div>
  );
};

