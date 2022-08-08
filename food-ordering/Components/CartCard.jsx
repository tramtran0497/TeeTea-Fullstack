import { ChangeQty } from './ChangeQty';
import Image from './Image';
import styles from '../styles/Cart.module.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteFormCart } from '../Redux/Cart/action';

export default function CartCard({ product }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteFormCart(product));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperLeft}>
        <Image src={product.image} alt={product.name} width="300px" height="300px" />
      </div>
      <div className={styles.wrapperRight}>
        <h2>
          {product.name} - {product.price}
        </h2>
        <div className={styles.info}>
          <h3>Note:</h3>
          <p>{product.note}</p>
        </div>
        <div className={styles.info}>
          <h3>Quantity:</h3>
          <ChangeQty product={product} />
        </div>
        <div className={styles.info} style={{ alignSelf: 'flex-end' }}>
          <AiOutlineDelete className={styles.icon} onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}
