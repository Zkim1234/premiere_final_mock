import styles from "@/ui/carousel-card/Small-card.module.css";
import Image from "next/image";

export default function SmallCard({ image, title, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={image}
          width={100}
          height={100}
          alt={title}
          className={styles.image}
        />
      </div>
      <div className={styles.information}>
        <div className={styles.textBox}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.bookmarkBox}>
          <Image
            className={styles.bookmark}
            src={"/bookmarks/unsaved-bookmark.svg"}
            alt="bookmark"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
