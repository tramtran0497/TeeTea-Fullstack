// import styles from "../styles/ListBestProducts.module.css";
import styles from "../styles/BestProduct.module.css";
import Image from "./Image";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../Redux/Cart/action";
import Link from "next/link";
import { IoCart, IoEyeSharp } from "react-icons/io5";

export const BestProduct = ({ product, height }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const toggleAddCart = (item) => {
        if (product.id === item.id) {
            setIsAdded(!isAdded);
            setData(item);
        }
    }
    useEffect(() => {
        if (isAdded === true) {
            dispatch(addToCart(data));
        } else{
            dispatch(removeFromCart(data));
        }
    });
    return (
        <div className={styles.wrapper} style={{"height": `${height}`}}>
            <Image src={product.img} className={styles.img} alt={product.name} />
            <div className={styles.content}>
                <h3>{product.name}</h3>
                <div className={styles.icons}>
                    <IoCart className={styles.icon} onClick={() => toggleAddCart(product)} style={{ "color": isAdded ? "aquamarine" : "white" }} />
                    <Link href={{
                        pathname: '/product/[id]',
                        query: { id: `${product.id}` }
                    }}>
                        <IoEyeSharp className={styles.icon} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
