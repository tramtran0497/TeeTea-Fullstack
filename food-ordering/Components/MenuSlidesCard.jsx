import styles from "../styles/Menu.module.css";
import Image from "next/image";
import Link from 'next/link';

export const MenuSlidesCard = ({dish}) => {
  return (
    <div className={styles.menuSlidesCard}>
        <Image src={dish.img} className={styles.img}/>
        <div className={styles.info}>
            <h3>{dish.name}</h3>
            <h3>{dish.day}</h3>
            <h3>€ {dish.price}</h3>
            <Link  href={{
                pathname: '/product/[id]',
                query: { id: `${dish.id}` }
              }}>
                <p>More details</p>
            </Link>
        </div>
    </div>
  );
};
