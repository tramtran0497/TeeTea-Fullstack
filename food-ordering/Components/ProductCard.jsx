import styles from '../styles/ProductCard.module.css';
import Image from './Image';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from '../Redux/Cart/action';
import Link from 'next/link';
import { BsFillCartDashFill, BsFillEyeFill, BsHeartFill, BsFillCartPlusFill} from "react-icons/bs";

import { love } from '../Redux/Love/actions';

export const ProductCard = ({ product }) => {
  const [showingCartPlus, setShowingCartPlus] = useState(true);
  const [isLoved, setIsLoved] = useState(false);
  const [displayProduct, setDisplayProduct] = useState({});

  const {listCarts} = useSelector(state => state.cart);
  const {listLove} = useSelector(state => state.love);
  const dispatch = useDispatch();

  useEffect(() => {
    if(product){
      setDisplayProduct(product);
    }
  },[product])

  useEffect(() => {
    const foundItemInCart = listCarts && listCarts.find(cart => cart.id === displayProduct.id);
    if(foundItemInCart) {
      setShowingCartPlus(false)
    } 
  },[listCarts, displayProduct]);

  const handleAdd = (item) => {
    setShowingCartPlus(false);
    dispatch(
      addToCart(
        {
          id: displayProduct.id,
          name: displayProduct.name,
          image: displayProduct.image,
          price: displayProduct.price[0],
          note: 'Make my meal as normally',
        },
        1
      )
    );
  };

  const handleRemove = (item) => {
    setShowingCartPlus(true);
    dispatch(removeFromCart({
      id: displayProduct.id,       
      note: 'Make my meal as normally',
    },));
  }

  const toggleAddLove = (item) => {
    setIsLoved(!isLoved);
    dispatch(love(displayProduct));
  };

  useEffect(() => {
    const itemInLove = listLove && listLove.find(love => love.id === displayProduct.id);
    if(itemInLove) {
      setIsLoved(true);
    }
  },[listLove, displayProduct]);

  if (!displayProduct) {
    return <div>There is nothing!</div>;
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image src={displayProduct.image ? displayProduct.image : "me.png"} alt={displayProduct.name} layout="fill" />
        </div>
        <div className={styles.content}>
          <h3>{displayProduct.name}</h3>
          <div className={styles.icons}>
            {
              showingCartPlus ? (
                <BsFillCartPlusFill
                className={styles.icon}
                onClick={() => handleAdd(displayProduct)}
                />
              ) : (
                <BsFillCartDashFill
                className={styles.icon}
                onClick={() => handleRemove(displayProduct)}
                />
              )
            }
            <Link
              href={{
                pathname: '/product/[id]',
                query: { id: `${displayProduct.id}` },
              }}
            >
              <a>
                <BsFillEyeFill className={styles.icon} />
              </a>
            </Link>
            <BsHeartFill
              className={styles.icon}
              onClick={() => toggleAddLove(displayProduct)}
              style={{ color: isLoved  ? 'rgb(235, 117, 136)' : '' }}
            />
          </div>
        </div>
      </div>
    );
  }
};
