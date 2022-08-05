import styles from '../../styles/Product.module.css';
import Image from '../../Components/Image';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/Cart/action';
import { fetchOneProduct } from '../../Redux/FetchOneProduct/fetchOneProduct-actions';
import { FaTruckLoading, FaRegSadCry } from 'react-icons/fa';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.fetchOneProduct);

  const [item, setItem] = useState({});

  useEffect(() => {
    // Check id before dispatch an action
    if (id) {
      dispatch(fetchOneProduct(id));
    }
  }, [id]);

  useEffect(() => {
    setItem(product);
  }, [product]);

  // useEffect(() => console.log("ITEM", item))

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formObj = Object.fromEntries(data.entries());
    const note = formObj.note;
    const qty = parseInt(formObj.quantity);
    const orderedProduct = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price[0],
      note,
    };
    dispatch(addToCart(orderedProduct, qty));
    event.target.reset();
  };

  if (loading)
    return (
      <div className={styles.containerLoading}>
        Loading... <FaTruckLoading style={{ fontSize: '30px', margin: '20px' }} />
      </div>
    );
  else if (error)
    return (
      <div className={styles.containerLoading}>
        Opps <FaRegSadCry style={{ fontSize: '30px', margin: '20px' }} />
        ...Problems happened! We are fixing.
      </div>
    );
  else {
    return (
      <div className={styles.container}>
        <Head>
          <title>TeeTea</title>
          <meta name="description" content="Best Street Food in Lahti" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.left}>
          <div className={styles.imgWrapper}>
            <Image
              src={item.image ? item.image : '.png'}
              alt={item.name}
              width="400px"
              height="300px"
            />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.name}>
            {item.name} - {item.price}€
          </h2>
          <div className={styles.info}>
            <label className={styles.title}>Type:</label>
            <p>{item.type}</p>
            <label className={styles.title}>Description:</label>
            <p>{item.description}</p>
            <label className={styles.title}>Ingredients:</label>
            <p>{item.ingredients}</p>
            <label className={styles.title}>You can add (50 cent/each):</label>
            <p>{item.extra}</p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <label className={styles.title} htmlFor="note">
              Unique taste! Leave your note or add more extra item here!
            </label>
            <input
              type="text"
              placeholder="E.g: Allergic to sesame"
              className={styles.note}
              id="note"
              name="note"
            />
            <div className={styles.qtyWrapper}>
              <label className={styles.title} htmlFor="quantity">
                Quantity
              </label>
              <input type="number" id="quantity" name="quantity" min="0" className={styles.qty} />
            </div>
            <input type="submit" value="Add Cart" className={styles.btn} />
          </form>
        </div>
      </div>
    );
  }
}
