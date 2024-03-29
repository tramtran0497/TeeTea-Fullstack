import styles from '../styles/Menu.module.css';
import Image from './Image';
import Link from 'next/link';
import { useEffect } from 'react';

export const MenuSlidesCard = ({ dish }) => {
  // useEffect(() => console.log('Check in MenuSlide', dish));
  return (
    <div className={styles.menuSlidesCard}>
      <Image src={dish.image} layout="fill" />
      <div className={styles.info}>
        <h3>{dish.name}</h3>
        <h3>€ {dish.price}</h3>
        <Link
          href={{
            pathname: '/product/[id]',
            query: { id: `${dish.id}` },
          }}
        >
          <p>More details</p>
        </Link>
      </div>
    </div>
  );
};
