import { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/LogIn.module.css';
import Link from 'next/link';
import { ThemeContext } from '../ReactHooks/ThemeContext';
import { AuthenticationContext } from '../ReactHooks/AutheticationContext';
import {
  IoCheckmarkCircleSharp,
  IoCreateOutline,
  IoGiftOutline,
  IoBagHandleOutline,
} from 'react-icons/io5';
import { MdOutlineDeliveryDining } from 'react-icons/md';

export default function Login() {
  const darkTheme = useContext(ThemeContext);
  const { err, authenticatedAccount, success, logIn } = useContext(AuthenticationContext);
  const [account, setAccount] = useState({ username: '', pwd: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticatedAccount(account);
  };

  useEffect(() => {
    // console.log("err", err)
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {logIn ? (
        <div
          className={styles.succeededLogIn}
          style={{ backgroundColor: darkTheme ? 'black' : 'white' }}
        >
          <h3>
            <IoCheckmarkCircleSharp className={styles.icon} /> {success}
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
      ) : (
        <div
          className={styles.formLogIn}
          style={{ backgroundColor: darkTheme ? 'black' : 'white' }}
        >
          <h2>LOG IN</h2>
          {err ? <p className={styles.error}>{err}</p> : ''}
          <div className={styles.userName}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setAccount({ ...account, username: e.target.value })}
              style={{ borderBottom: darkTheme ? '1px solid white' : '1px solid black' }}
              required
            />
          </div>
          <div className={styles.passWord}>
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              id="pwd"
              onChange={(e) => setAccount({ ...account, pwd: e.target.value })}
              style={{ borderBottom: darkTheme ? '1px solid white' : '1px solid black' }}
              required
            />
          </div>
          <button onClick={handleSubmit} className={styles.btn}>
            SIGN IN
          </button>
          <div className={styles.getPwdandSignUp}>
            <p>Forget your password</p>
            <p>Create a new account</p>
          </div>
        </div>
      )}
    </div>
  );
}
