import styles from "./Promotion-list.module.css";
import Image from "next/image";

//discount price has to be in number format not percentage. I dont know how I could sort out between percentage and number.
export default function PromotionList({title, image, price, discount}) {
    let discountPrice = price - discount;
    //if discount price is less than 0, set it to 0
    if (discountPrice < 0) {
        discountPrice = 0;
    }
    
  return <div className={styles.promotionList}>
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
  </div>;
}

