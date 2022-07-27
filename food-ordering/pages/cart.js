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
        {listCarts.length ? (
          listCarts.map((cart) => (
            <div className={styles.orderedItem} key={cart.id}>
              <div className={styles.left}>
                <Image src={cart.img} alt={cart.name} />
              </div>
              <div className={styles.right}>
                <div className={styles.title}>
                  <h2>{cart.name}</h2>
                  <subtitle>(Product code: {cart.id})</subtitle>
                </div>
                <div className={styles.info}>
                  <div className={styles.infoWrapper}>
                    <h4 style={{ width: '100%' }}>Add:</h4>
                    {cart.listAddIngredient.map((igr) => (
                      <div className={styles.extraIgr} key={igr}>
                        <label htmlFor={igr}>{igr}</label>
                      </div>
                    ))}
                  </div>
                  <div className={styles.infoWrapper}>
                    <h4>Size:</h4>
                    {/* hard code */}
                    <p>{cart.size}</p>
                  </div>
                  <div className={styles.infoWrapper}>
                    <h4>Quantity:</h4>
                    <ChangeQty product={cart} />
                  </div>
                  <div className={styles.infoWrapper}>
                    <h4>Price:</h4>
                    {/* hard code */}
                    <p>€ {cart.price}</p>
                  </div>
                  <FaTrashAlt className={styles.trashIcon} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.command}>
            There is nothing in your cart, please have a look and design you meal today!{' '}
            <GiHotMeal className={styles.icon} />
          </p>
        )}
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
