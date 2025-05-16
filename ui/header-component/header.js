import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div className={styles.locationMenu}>
          <span className={styles.locationText}>Location</span>
          <Image
            src="Arrow_down.svg"
            alt="Dropdown"
            width={22}
            height={22}
          />
        </div>
        <div className={styles.icons}>
          <Image
            src="search_icon.svg"
            alt="Search"
            width={30}
            height={30}
          />
          <Image
            src="Bell.svg"
            alt="Notifications"
            width={35}
            height={35}
          />
        </div>
      </div>
      <div className={styles.sectionTitle}>
        <h2>Featured This Month</h2>
      </div>
    </div>
  );
}
