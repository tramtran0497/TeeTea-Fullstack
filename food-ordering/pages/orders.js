import { useState } from "react";
import styles from "../styles/Orders.module.css";
import { MdOutlinePayment } from "react-icons/md";
import {CgArrowLongRight} from "react-icons/cg";
import { GiCookingPot } from "react-icons/gi";
import { IoFastFoodOutline, IoHappyOutline, IoThumbsUpOutline } from "react-icons/io5";
import Head from 'next/head';

export default function orders() {
    // hard code: user has current order
    const [isOrdering, setIsOrdering] = useState(true);
    // hard code processing
    return(
        <div className={styles.container}>
            <Head>
                <title>TeeTea</title>
                <meta name="description" content="Best Street Food in Lahti" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.currentOrders}>
                <h2>ORDER PROCESSING</h2>
                {
                    isOrdering ? ( <div className={styles.orderProcess}>
                        <div className={styles.step} style={{"opacity": "1"}}>
                            <IoFastFoodOutline className={styles.icon}/>
                            <p>Order</p>
                        </div>
                        <CgArrowLongRight className={styles.icon}/>
                        <div className={styles.step} style={{"opacity": ".3"}}>
                            <MdOutlinePayment className={styles.icon}/>
                            <p>Pay</p>
                        </div>
                        <CgArrowLongRight className={styles.icon}/>
                        <div className={styles.step} style={{"opacity": ".3"}}>
                            <IoHappyOutline className={styles.icon}/>
                            <p>Receive</p>
                        </div>
                        <CgArrowLongRight className={styles.icon}/>
                        <div className={styles.step} style={{"opacity": ".3"}}>
                            <GiCookingPot className={styles.icon}/> 
                            <p>Prepare</p>
                        </div>
                        <CgArrowLongRight className={styles.icon}/>
                        <div className={styles.step} style={{"opacity": ".3"}}>
                            <IoThumbsUpOutline className={styles.icon}/>
                            <p>Ready</p>
                        </div>
                    </div>) : (<p className={styles.command}>Sorry, you do not have any orders right now, let's order your meal!</p>)
                }
            </div>
            <div className={styles.historyList}>
                <h2>YOUR HISTORY TRANSACTION</h2>
                <ul>
                    <li>Receipt - <span>date 20-11-2021</span></li>
                    <li>Receipt - <span>date 23-12-2021</span></li>
                    <li>Receipt - <span>date 31-12-2021</span></li>
                </ul>
            </div>
        </div>
    );
};

