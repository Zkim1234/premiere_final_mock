import styles from '@/ui/full-sized-event-card/full-sized-event-card.module.css'
import Image from 'next/image';

export default function EventCard({ image, title, subtitle, highlight }) {
  return (
    <div className={`${styles.card} ${highlight ? styles.highlight : ''}`}>
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
          src="/images/bookmark.svg"
          width={24}
          height={24}
          alt="bookmark"
          className={styles.bookmark}
        />
      </div>
    </div>
  );
}
