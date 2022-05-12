import { useEffect, useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/Cart/action";
import styles from "../styles/ChangeQty.module.css";


export const ChangeQty = ({product}) => {
    const [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch();
    const {listCarts} = useSelector(state => state.cart);

    useEffect(() => {
      const foundCart = listCarts?.find(cart => cart.id === product.id);
      if(foundCart) {
        setQuantity(foundCart.qty);
      } else{
        setQuantity(0);
      };
    })

    const handleClick = (act) => {
        if(act === "add"){  
            dispatch(addToCart(product));
        } else if (act === "subtract"){
            dispatch(removeFromCart(product));
        };
    };
  return (
    <div className={styles.quantity}>
        <RiSubtractLine className={styles.icon} onClick={() => handleClick("subtract")}/>
        <p className={styles.qtyAmount}>{quantity}</p>
        <RiAddLine className={styles.icon} onClick={() => handleClick("add")}/>
    </div>
  );
};
