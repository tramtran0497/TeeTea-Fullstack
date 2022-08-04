import styles from '../styles/Cart.module.css';
import Image from '../Components/Image';
import { FaTrashAlt } from 'react-icons/fa';
import { ChangeQty } from '../Components/ChangeQty';
import { useSelector } from 'react-redux';
import { GiHotMeal } from 'react-icons/gi';

export default function Carts() {
  const { listCarts } = useSelector((state) => state.cart);
  const totalAmountBill = listCarts
    .map((cart) => cart.qty * cart.price)
    .reduce((pre, cur) => pre + cur, 0);

  return (
    <div className={styles.container}>
      <h1>YOUR ORDER - OUR HAPPINESS</h1>
      <div className={styles.listOrderedItems}>
       {console.log("AAAAA",listCarts)}
      </div>

      {listCarts.length ? (
        <div className={styles.checkOut}>
          <h2>CHECK OUT</h2>
          <div className={styles.listItems}>
            {listCarts.map((cart) => (
              <div className={styles.item} key={cart.id}>
                <h4>
                  {cart.name} - {cart.id}
                </h4>
                <p>{cart.qty}</p>
                <p>{cart.qty * cart.price}</p>
              </div>
            ))}
          </div>
          <div className={styles.total}>
            <h3>Total</h3>
            <p>€ {totalAmountBill}</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
