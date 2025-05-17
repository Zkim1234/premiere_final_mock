import React, { useState } from 'react';
import styles from './sales.module.css';

export default function SalesCard ({image, alt, brandName, text, offer}){
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className={styles.salesCard}>
      <div className={styles.bookmarkIcon}>
        <img src={bookmarked ? "/bookmarks/saved-bookmark.svg" : "/bookmarks/unsaved-bookmark.svg"} alt="bookmark" onClick={toggleBookmark}/>
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
        <div className={styles.offerButton}>{offer}</div>
      </div>
    </div>
  );
};

