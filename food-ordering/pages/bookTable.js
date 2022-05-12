import styles from "../styles/BookTable.module.css";
import Head from 'next/head';
import { FiPhoneCall } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


export default function bookTable(){
  return (
    <div className={styles.container}>
        <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.wrapper}>
            <FiPhoneCall className={`${styles.icon} ${styles.phoneIcon}`}/>
            <h1>Calling (+358) 412 345 678</h1>
            <div className={styles.content}>
                <FaQuoteLeft className={styles.icon}/>
                <p>Book your table, chill your meal with your best!</p>
                <FaQuoteRight className={styles.icon}/>
            </div>
        </div>
        <p className={styles.command}>Sorry for this inconvenience, we try to create a special place for you to book table directly from this page.</p>

    </div>
  )
};
