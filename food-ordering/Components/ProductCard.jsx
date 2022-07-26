import styles from '../styles/ProductCard.module.css';
import Image from './Image';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from '../Redux/Cart/action';
import Link from 'next/link';
import { IoCart, IoEyeSharp, IoHeart } from 'react-icons/io5';
import { love } from '../Redux/Love/actions';

export const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isLoved, setIsLoved] = useState(false);

  const dispatch = useDispatch();

  const toggleAddCart = (item) => {
    if (product.id === item.id) {
      setIsAdded(!isAdded);
    }
  };

  const toggleAddLove = (item) => {
    if (product.id === item.id) {
      setIsLoved(!isLoved);
      dispatch(love(product));
    }
    
  };

  useEffect(() => {
    if (isAdded === true) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product));
    }
  }, [isAdded]);

  // Detail product
  useEffect(() => console.log(product));

  return (
    <div className={styles.wrapper}>
      <Image src={product.image} className={styles.img} alt={product.name} layout="fill" />
      <div className={styles.content}>
        <h3>{product.name}</h3>
        <div className={styles.icons}>
          <IoCart
            className={styles.icon}
            onClick={() => toggleAddCart(product)}
            style={{ color: isAdded ? 'rgb(235, 117, 136)' : '' }}
          />
          <Link
            href={{
              pathname: '/product/[id]',
              query: { id: `${product._id}` },
            }}
          >
            <IoEyeSharp className={styles.icon} />
          </Link>
          <IoHeart
            className={styles.icon}
            onClick={() => toggleAddLove(product)}
            style={{ color: isLoved ? 'rgb(235, 117, 136)' : '' }}
          />
        </div>
      </div>
    </div>
  );
};
