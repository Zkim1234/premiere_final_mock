import styles from "./header.module.css";

export default function Header({ sectionTitle = "Featured This Month" }) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div className={styles.locationMenu}>
          <span className={styles.locationText}>Location</span>
          <img src="/Arrow_down.svg" />
        </div>
        <div className={styles.icons}>
          <img />
          <img />
        </div>
      </div>

      <div className={styles.sectionTitle}>
        <h2>{sectionTitle}</h2>
      </div>
    </div>
  );
}
