import styles from "./Promotion-list.module.css";
import Image from "next/image";

// Assumes discount is a number (not percentage)
export default function PromotionList({ title, image, price, discount }) {
  let discountPrice = price - discount;

  // Ensure discount price doesn't go below zero
  if (discountPrice < 0) {
    discountPrice = 0;
  }

  return (
    <div className={styles.promotionList}>
      <div className={styles.image}>
        <Image src={image} alt={title} width={65} height={65} />
      </div>

      <div className={styles.promotionInfo}>
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.priceInfo}>
        <div className={styles.price}>${price}</div>
        <div className={styles.discountPrice}>${discountPrice}</div>
      </div>
    </div>
  );
}
