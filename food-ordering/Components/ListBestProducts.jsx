import styles from "../styles/ListBestProducts.module.css"
import { BestProduct } from "./BestProduct"
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/FetchData/fetchData-actions";


export const ListBestProducts = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const listProducts = useSelector((state) => state.fetchProduct.listProducts);


    useEffect(() => {
      dispatch(fetchProducts());
    }, []);

    useEffect(() => {
      setData(listProducts);
    }, [listProducts]);

    // useEffect(() => console.log("Check data",data))
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>Best Foods & Drinks</h2>
            <p>The unique restaurant with Asia street food style, we always bring to you the best moment!
               Your feeling as relax, enjoy your meal and chill the music after stressing in life.
               Friends and Family are around you!!! 
            </p>
            <p>Here, List best foods and drinks are received much love from customers in this spring term, Let&apos;s try them with your friends and family!</p>
        </div>
        <div className={styles.listProducts}>
            <div className={styles.listFoods}>   
                {
                    data.map(product => product.type === "Best seller" ? <BestProduct product={product}/> : "")
                }
            </div>
        </div>
    </div>
  )
}