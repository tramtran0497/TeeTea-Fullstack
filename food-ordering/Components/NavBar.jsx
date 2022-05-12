import styles from "../styles/NavBar.module.css"
import {IoFastFoodOutline} from 'react-icons/io5';
import Link from 'next/link'
import { RiUserSettingsLine,  RiShoppingCart2Line, RiSunLine, RiMoonLine} from "react-icons/ri";
import { useContext, useState, useEffect } from "react";
import { ThemeContext, ThemeUpdateContext } from "../ReactHooks/ThemeContext";
import { useSelector } from "react-redux";
import { NavBarUser } from "./NavBarUser";

export const NavBar = () => {
    const [isShowed, setIsShow] = useState(false);
    const darkTheme = useContext(ThemeContext);
    const toggleTheme = useContext(ThemeUpdateContext);

    const {listCarts} = useSelector((state) => state.cart);
    const initialValue = 0;
    const totalQty = listCarts.map(cart => cart.qty).reduce((pre, current) => pre + current, initialValue)

    const handleShow = () => {
        setIsShow(!isShowed);
    }

    useEffect(() => {
    });

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <IoFastFoodOutline className={styles.icon}/> 
                <Link href="/">
                    <h1>TeeTea</h1>
                </Link>
            </div>
            <div className={styles.center}>
                <ul className={styles.listItems}>
                    <Link href="/">
                        <li className={styles.item}>Home</li>
                    </Link>
                    <Link href="/menu">
                        <li className={styles.item}>Menu</li>
                    </Link>
                    <Link href="/event">
                        <li className={styles.item}>Event</li>
                    </Link>
                    <Link href="/career">
                        <li className={styles.item}>Career</li>
                    </Link>
                    <Link href="/contact">
                        <li className={styles.item}>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.right}>
                {
                    darkTheme ? <RiMoonLine className={styles.icon} onClick={toggleTheme}/> : <RiSunLine className={styles.icon} onClick={toggleTheme}/>
                }
                <div>
                    <Link href="/cart">
                        <RiShoppingCart2Line className={styles.icon}/>
                    </Link>
                    {
                        (totalQty > 0) ? <div className={styles.qtyCart}>{totalQty}</div> : ""
                    }
                </div>
                <RiUserSettingsLine className={styles.icon} onClick={handleShow}/>
                <NavBarUser style={isShowed ? "0%" : "100%"}/>
            </div>
        </div>
    )
}
