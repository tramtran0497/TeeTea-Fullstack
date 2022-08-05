import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { RiUserSettingsLine, RiShoppingCart2Line, RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useContext, useState } from 'react';
import { ThemeContext, ThemeUpdateContext } from '../ReactHooks/ThemeContext';
import { useSelector } from 'react-redux';
import { NavBarUser } from './NavBarUser';
import Image from './Image';
import logo from '../public/img/logo.png';

export const Header = () => {
  const [isShowed, setIsShow] = useState(false);
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  const { listCarts } = useSelector((state) => state.cart);
  const initialValue = 0;
  const totalQty = listCarts
    .map((cart) => cart.qty)
    .reduce((pre, current) => pre + current, initialValue);

  const handleShow = () => {
    setIsShow(!isShowed);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgWrapper}>
          <Link href="/">
            <a>
              <Image src={logo} alt="Logo" />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.center}>
        <ul className={styles.listItems}>
          <Link href="/">
            <a>
              <li className={styles.item}>Home</li>
            </a>
          </Link>
          <Link href="/menu">
            <a>
              <li className={styles.item}>Menu</li>
            </a>
          </Link>

          <Link href="/event">
            <a>
              <li className={styles.item}>Event</li>
            </a>
          </Link>
          <Link href="/career">
            <a>
              <li className={styles.item}>Career</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li className={styles.item}>Contact</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className={styles.right}>
        {darkTheme ? (
          <RiMoonLine className={styles.icon} onClick={toggleTheme} />
        ) : (
          <RiSunLine className={styles.icon} onClick={toggleTheme} />
        )}
        <div>
          <Link href="/cart">
            <a>
              <RiShoppingCart2Line className={styles.icon} />
            </a>
          </Link>
          {totalQty > 0 ? <div className={styles.qtyCart}>{totalQty}</div> : ''}
        </div>
        <RiUserSettingsLine className={styles.icon} onClick={handleShow} />
        <NavBarUser style={isShowed ? '0%' : '100%'} />
      </div>
    </div>
  );
};
