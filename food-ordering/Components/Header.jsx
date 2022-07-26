import styles from "../styles/Header.module.css";
import Link from 'next/link';
import { RiUserSettingsLine,  RiShoppingCart2Line, RiSunLine, RiMoonLine} from "react-icons/ri";
import { useContext, useState } from "react";
import { ThemeContext, ThemeUpdateContext } from "../ReactHooks/ThemeContext";
import { useSelector } from "react-redux";
import { NavBarUser } from "./NavBarUser";
import Image from "next/image";
import logo from "../public/img/logo.png"

export const Header = () => {
    const [isShowed, setIsShow] = useState(false);
    const darkTheme = useContext(ThemeContext);
    const toggleTheme = useContext(ThemeUpdateContext);

    const {listCarts} = useSelector((state) => state.cart);
    const initialValue = 0;
    const totalQty = listCarts.map(cart => cart.qty).reduce((pre, current) => pre + current, initialValue);

    const handleShow = () => {
        setIsShow(!isShowed);
    };

    const customLoader = ({ src }) => {
        return src
    };

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgWrapper}>
                    <Link href="/">
                        <Image src={logo} className={styles.img} alt="Logo" loader={customLoader}/>
                    </Link>
                </div>
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
    );
};
