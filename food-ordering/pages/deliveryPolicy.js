import styles from "../styles/DeliveryPolicy.module.css";
import Head from 'next/head';
import { GiStorkDelivery } from "react-icons/gi";


export default function deliveryPolicy(){
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h1><GiStorkDelivery className={styles.icon}/> Delivery Services & Policy</h1>
        <div className={styles.content}>
          <ul>
            <li>Delivery F&B</li>
            <li>Delivery Gifts for friends and family</li>
            <li>Delivery Times</li>
            <li>Delivery Monthly</li>
          </ul>
        </div>
      </div>
    </div>
  )
};