import { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/LogIn.module.css';
import Link from 'next/link';
import { ThemeContext } from '../ReactHooks/ThemeContext';
import {
  IoCheckmarkCircleSharp,
  IoCreateOutline,
  IoGiftOutline,
  IoBagHandleOutline,
} from 'react-icons/io5';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { FaRegSadCry, FaTruckLoading } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function LoggedIn() {
  const darkTheme = useContext(ThemeContext);
  const [user, setUser] = useState({});
  const { userInfo, success, loading, error } = useSelector((state) => state.userLoggedIn);
  useEffect(() => {
    if (userInfo) {
      setUser(userInfo);
    }
  }, [userInfo]);
  if (loading)
  return (
    <div className={styles.containerLoading}>
      Loading... <FaTruckLoading style={{ fontSize: '30px', margin: '20px' }} />
    </div>
  );
  else if (userInfo && success) {
    return (
      <div className={styles.container}>
        <Head>
          <title>TeeTea</title>
          <meta name="description" content="Best Street Food in Lahti" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          className={styles.succeededLogIn}
          style={{ backgroundColor: darkTheme ? 'black' : 'white' }}
        >
          <h3>
            <IoCheckmarkCircleSharp className={styles.icon} />
            {`Successfully logged in, ${user.name}. Choose our services and chill your day!`}
          </h3>
          <div className={styles.offerList}>
            <h4>OUR SERVICES</h4>
            <Link href="/bookTable">
              <div className={`${styles.offerItem} ${styles.bookTable}`}>
                <IoCreateOutline className={styles.offerIcon} />
                <p>Book a table</p>
              </div>
            </Link>
            <Link href="/menu">
              <div className={styles.offerItem}>
                <IoGiftOutline className={styles.offerIcon} />
                <p>Gifts for your friends and family</p>
              </div>
            </Link>
            <Link href="/menu">
              <div className={styles.offerItem}>
                <IoBagHandleOutline className={styles.offerIcon} />
                <p>Pick Up</p>
              </div>
            </Link>
            <Link href="/menu">
              <div className={styles.offerItem}>
                <MdOutlineDeliveryDining className={styles.offerIcon} />
                <p>Delivery</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  } else{
    return (
      <div className={styles.containerLoading}>
        Opps <FaRegSadCry style={{ fontSize: '30px', margin: '20px' }} />
        ...Problems happened! Page Not Found. You need to login before visting this page. Thank you!
      </div>
    );
  }
}
