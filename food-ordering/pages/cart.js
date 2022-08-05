import styles from '../styles/Cart.module.css';
import Image from '../Components/Image';
import { FaTrashAlt } from 'react-icons/fa';
import { ChangeQty } from '../Components/ChangeQty';
import { useSelector } from 'react-redux';
import { GiHotMeal } from 'react-icons/gi';
import CartCard from '../Components/CartCard';

export default function Carts() {
  const { listCarts } = useSelector((state) => state.cart);
  const totalAmountBill = listCarts
    .map((cart) => cart.qty * cart.price)
    .reduce((pre, cur) => pre + cur, 0)
    .toFixed(2)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>YOUR ORDER - OUR HAPPINESS</h1>
        <div className={styles.listOrderedItems}>
          {listCarts.length ? listCarts.map(cart => <CartCard product={cart} key={cart.id}/>) : <p>Your cart is empty. Please select your meals!</p>}
        </div>
      </div>
      <div className={styles.right}>
        <h2>CHECK OUT</h2>
        <div className={styles.listProducts}>
          {listCarts.length ? listCarts.map((cart) => (
            <div className={styles.product} key={cart.id}>
              <h4>{cart.name}</h4>
              <p>{cart.qty} x {cart.price}</p>
              <p>{(cart.qty * cart.price).toFixed(2)}</p>
            </div>
          )) : <div className={styles.product}>Your check out is empty!</div>}
        </div>
        <div className={styles.total}>
          <h3>Total</h3>
          <p>€ {totalAmountBill}</p>
        </div>
      </div>
    </div>
  );
}
