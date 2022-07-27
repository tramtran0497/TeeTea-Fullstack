import styles from '../styles/DeliveryPolicy.module.css';
import Head from 'next/head';

export default function deliveryServices() {
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
                <p>There are two options delivery services:</p>
                <h5>TeeTea Service: </h5>
                <p> - You click &quot;Delivery&quot; button status when ordering!</p>
                <p> - Only using local area (about 10km) with 20 minutes each order.</p>
                <p> - Free FIRST 3 TIMES!!! (with new account).</p>
                <p> - Cost: (the price of each delivery depends on your location).</p>
                <h5>Other services:</h5>
                <p> Create your account and you receive codeFREE for first delivery!</p>
              </div>
            </div>

            <div className={styles.serviceWrapper}>
              <h4>Delivery Gifts for friends and family</h4>
              <div className={styles.serviceContent}>
                <p>The specialist service at TeeTea Restaurant!</p>
                <p>
                  Let&rsquo;s us help you to bring all the best to your friends and your family!
                </p>
                <p>
                  {' '}
                  - You click &quot;Gifts for Friends and Family&quot; button status when ordering!
                </p>
                <p> - Only using local area (about 10km) with 20 minutes each order.</p>
                <p> - Cost: (the price of each delivery depends on your location).</p>
                <p> - Free FIRST TIME!!! (with new account).</p>
                <p> - Extra services: F&B Gifts, Party, Events,..</p>
              </div>
            </div>

            <div className={styles.serviceWrapper}>
              <h4>Delivery Times</h4>
              <div className={styles.serviceContent}>
                <h5>Who needs this services?</h5>
                <p>You&apos;re busy, you can not handle cooking and preparing your meal!</p>
                <h5>There are three options:</h5>
                <p> - 3 times: Saving money 10% compared to normal delivery.</p>
                <p> - 5 times: Saving money 20% compared to normal delivery.</p>
                <p> - 10 times: Saving money 30% compared to normal delivery.</p>
                <p> - Cost: (the price of each delivery depends on your location).</p>
                <p> - Note: The same address point each option!</p>
                <p> - Free FIRST TIME OF EACH OPTION!!! (with new account).</p>
              </div>
            </div>

            <div className={styles.serviceWrapper}>
              <h4>Delivery Monthly</h4>
              <div className={styles.serviceContent}>
                <h5>How about Delivery Monthly?</h5>
                <p>
                  If &quot;Delivery Times&quot; is not enough! why do not you choose this service?
                  Saving more money with delivery monthly, weekly, daily.{' '}
                </p>
                <h5>Monthly Service:</h5>
                <p> - Saving money 40% compared to normal delivery.</p>
                <p> - Cost: (the price of each delivery depends on your location).</p>
                <p> - Note: The same address point each option!</p>
                <p> - Free FIRST TIME!!! (with new account).</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
