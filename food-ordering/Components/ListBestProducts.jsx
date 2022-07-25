import styles from "../styles/ListBestProducts.module.css"
// import {listProducts} from "../fakeData/MenuData.js"
import { BestProduct } from "./BestProduct"
import { useEffect, useState } from "react"
import axios from "axios"

export const ListBestProducts = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const url ="https://teetea-api.herokuapp.com/products"
            try {
              const { data: response } = await axios.get(url)
              setData(response)
            } catch (error) {
              console.error("EEEE",error);
            }
            setLoading(false)
          }
      
          fetchData()
        }, [])
    useEffect(() => console.log(data))
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