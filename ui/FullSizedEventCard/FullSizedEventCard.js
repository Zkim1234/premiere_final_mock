'use client';
import { useState } from 'react';
import styles from '@/ui/FullSizedEventCard/FullSizedEventCard.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function EventCard({ image, title, subtitle, highlight, size = 'normal' }) {
  const [bookmarked, setBookmarked] = useState(false);
  const router = useRouter();

  const toggleBookmark = (e) => {
    e.stopPropagation(); // Stop the click event from bubbling up to the card
    setBookmarked(!bookmarked);
  };

  const handleCardClick = () => {
    router.push("/post_page");
  };

  return (
    <div 
      className={`${styles.card} ${highlight ? styles.highlight : ''} ${styles[size]}`}
      onClick={handleCardClick}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.text}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <Image
          src={bookmarked ? '/bookmarks/saved-bookmark.svg' : '/bookmarks/unsaved-bookmark.svg'}
          width={24}
          height={24}
          alt="bookmark"
          className={styles.bookmark}
          onClick={toggleBookmark}
        />
      </div>
    </div>
  );
}
