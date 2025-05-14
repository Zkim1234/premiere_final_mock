import styles from '@/ui/full-sized-event-card/full-sized-event-card.module.css'
import Image from 'next/image';
const EventCard = ({ image, title, subtitle }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardSubtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default EventCard;
