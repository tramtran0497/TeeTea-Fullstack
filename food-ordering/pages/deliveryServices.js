import styles from '../styles/DeliveryPolicy.module.css';
import Head from 'next/head';
import { DeliveryCard } from '../Components/DeliveryCard';

const listDeliveryServices = [
  {
    id: "01",
    title: "Delivery F&B",
    subtitle: "There are two options delivery services: TeaTee and others(Foodora & Woff). With others, create your account and you receive codeFREE for first delivery! (asking details in cashier or customer services)",
    content: [
      "- You click 'Delivery' button status when ordering!",
      "- Only using local area (about 10km) with 20 minutes each order.",
      "- Free FIRST 3 TIMES!!! (with new account).",
      "- Cost: (the price of each delivery depends on your location).",
    ]
  },
  {
    id: "02",
    title: "Delivery Gifts for friends and family",
    subtitle: "The specialist service at TeeTea Restaurant! Let' us help you to bring all the best to your friends and your family!",
    content: [
      "- You click 'Gifts for Friends and Family' button status when ordering!",
      "- Only using local area (about 10km) with 20 minutes each order.",
      "- Free FIRST TIMES!!! (with new account).",
      "- Extra services: F&B Gifts, Party, Events,..",
    ]
  },
  {
    id: "03",
    title: "Delivery Times",
    subtitle: "Who needs this services? And you are busy, you can not handle cooking and preparing your meal!",
    content: [
      "- 3 times: Saving money 10% compared to normal delivery.",
      "- 5 times: Saving money 20% compared to normal delivery.",
      "- 10 times: Saving money 30% compared to normal delivery.",
      "- Cost: (the price of each delivery depends on your location).",
      "- Note: The same address point each option!",
      "- Free FIRST TIME OF EACH OPTION!!! (with new account).",
    ]
  },
  {
    id: "04",
    title: "Delivery Monthly",
    subtitle: "How about Delivery Monthly? If Delivery Times is not enough! why do not you choose this service? Saving more money with delivery monthly, weekly, daily.",
    content: [
      "- Saving money 40% compared to normal delivery.",
      "- Cost: (the price of each delivery depends on your location).",
      "- Note: The same address point each option!",
      "- Cost: (the price of each delivery depends on your location).",
      "- Free FIRST TIME!!! (with new account).",
    ]
  },        
];

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
            {listDeliveryServices.map(service => <DeliveryCard delivery={service} key={service.id}/>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
