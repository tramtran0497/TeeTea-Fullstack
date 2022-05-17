import styles from "../styles/DeliveryPolicy.module.css";
import Head from 'next/head';


export default function deliveryServices(){
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h1>Delivery Services</h1>
        <div className={styles.content}>
          <ul>
            <div className={styles.serviceWrapper}>
              <h4>Delivery F&B</h4>
              <div className={styles.serviceContent}>
                We have 2 options delivery services, you can choose the best for your case:
                - TeeTea service: 
                - Others services:
              </div>
            </div>

            <div className={styles.serviceWrapper}>
              <h4>Delivery Gifts for friends and family</h4>
              <div className={styles.serviceContent}>
                This is the specialist service at TeeTea Restaurant! We help you to bring all the best to your friends and your family.

              </div>
            </div>

            <div className={styles.serviceWrapper}>
              <h4>Delivery Times</h4>
              <div className={styles.serviceContent}>
                Who needs this services? You're busy, you can not handle cooking and preparing your meal! Don't worry, we always support you by our services.
                With this service, you can choose buy 10 times delivery with saving price!!! 
              </div>
            </div>

            <div className={styles.serviceWrapper}>
              <h4>Delivery Monthly</h4>
              <div className={styles.serviceContent}>
                If "Delivery Times" is not enough! why don't you choose this service? Saving more money with delivery monthly, weekly, daily. 
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
};