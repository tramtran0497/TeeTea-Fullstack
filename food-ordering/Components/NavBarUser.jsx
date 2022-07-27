import { useEffect, useContext } from 'react';
import styles from '../styles/NavBarUser.module.css';
import Image from './Image';
import user1 from '../public/img/user-1.avif';
import {
  IoSettingsOutline,
  IoLogOutOutline,
  IoRestaurantOutline,
  IoFastFoodOutline,
  IoGiftOutline,
  IoHelpCircleOutline,
  IoLogInOutline,
  IoPersonAddOutline,
} from 'react-icons/io5';
import Link from 'next/link';
import { AuthenticationContext } from '../ReactHooks/AutheticationContext';

export const NavBarUser = ({ style }) => {
  const { logIn, authenticatedAccount } = useContext(AuthenticationContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    authenticatedAccount({});
  };
  useEffect(() => {
    // console.log("logIn", logIn);
  });

  if (logIn) {
    return (
      <div className={styles.containerUser} style={{ transform: `translateX(${style})` }}>
        <div className={styles.top}>
          <div className={styles.imgWrapper}>
            <Image src={user1} className={styles.img} />
          </div>
          <div className={styles.nameAccount}>
            <h2>Name Account</h2>
            <Link href="/profile">
              <p>Edit your profile</p>
            </Link>
          </div>
        </div>
        <div className={styles.center}>
          <Link href="/orders">
            <div className={styles.navItem}>
              <IoFastFoodOutline className={styles.icon} />
              <p>My order</p>
            </div>
          </Link>
          <Link href="/profile">
            <div className={styles.navItem}>
              <IoGiftOutline className={styles.icon} />
              <p>Discount and Gifts</p>
            </div>
          </Link>
          <Link href="/profile">
            <div className={styles.navItem}>
              <IoRestaurantOutline className={styles.icon} />
              <p>My recent orders</p>
            </div>
          </Link>
          <Link href="/profile">
            <div className={styles.navItem}>
              <IoSettingsOutline className={styles.icon} />
              <p>Setting</p>
            </div>
          </Link>
          <Link href="/help">
            <div className={styles.navItem}>
              <IoHelpCircleOutline className={styles.icon} />
              <p>Help</p>
            </div>
          </Link>
        </div>
        <div className={styles.bottom} onClick={handleLogOut}>
          <IoLogOutOutline className={styles.icon} />
          <p>Log out</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.containerNoUser} style={{ transform: `translateX(${style})` }}>
        <Link href="/login">
          <div className={styles.navItem}>
            <IoLogInOutline className={styles.icon} />
            <p>Log In</p>
          </div>
        </Link>
        <Link href="/register">
          <div className={styles.navItem}>
            <IoPersonAddOutline className={styles.icon} />
            <p>Register</p>
          </div>
        </Link>
        <Link href="/help">
          <div className={styles.navItem}>
            <IoHelpCircleOutline className={styles.icon} />
            <p>Help</p>
          </div>
        </Link>
      </div>
    );
  }
};
