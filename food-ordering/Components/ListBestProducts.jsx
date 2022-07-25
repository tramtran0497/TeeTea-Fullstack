import styles from '../styles/ListBestProducts.module.css';
import { ProductCard } from './ProductCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/FetchData/fetchData-actions';
import { FaTruckLoading, FaRegSadCry } from 'react-icons/fa';

export const ListBestProducts = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.fetchProduct.listProducts);
  const loading = useSelector((state) => state.fetchProduct.loading);
  const error = useSelector((state) => state.fetchProduct.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setProducts(listProducts);
  }, [listProducts]);

  // useEffect(() => console.log("Check data",data))
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
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Best Foods & Drinks</h2>
        <p>
          The unique restaurant with Asia street food style, we always bring to you the best moment!
          Your feeling as relax, enjoy your meal and chill the music after stressing in life.
          Friends and Family are around you!!!
        </p>
        <p>
          Here, List best foods and drinks are received much love from customers in this spring
          term, Let&apos;s try them with your friends and family!
        </p>
      </div>
      <div className={styles.listProducts}>
        {products.map((product) =>
          product.type === 'Best seller' ? <ProductCard product={product} /> : ''
        )}
      </div>
    </div>
  );
};
