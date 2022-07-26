import styles from "../styles/Footer.module.css";
import {IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp, IoLogoFacebook} from "react-icons/io5";
import { BiPhoneCall, BiNotepad, BiDonateHeart, BiMap} from "react-icons/bi";
import { MdOutlineDeliveryDining } from "react-icons/md";
import Link from 'next/link';

export const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
               <div className={styles.openTime}>
                    <h2>Opening Hours</h2>
                    <p>Mon-Thu: 10:00 - 21:00</p>
                    <p>Fri, Sat: 11:00 - 22:00</p>
                    <p>Sun: 12:00 - 20:00</p>
               </div>
               <div className={styles.listStores}>
                    <h4><BiMap style={{"fontSize": "25px", "margin": "0 10px 0 0"}}/>Tee Tea - Lahti</h4>
                    <p>Mariankatu 6, 15110 Lahti Finland</p>
               </div>
            </div>
            <div className={styles.center}>
                <ul className={styles.list}>
                    <Link href="/menu">
                        <li className={styles.listItem}>Menu</li>       
                    </Link>
                    <Link href="/career">
                        <li className={styles.listItem}>Career</li>
                    </Link>
                    <Link href="/event">
                        <li className={styles.listItem}>Event & News</li>      
                    </Link>
                    <Link href="/">
                        <li className={styles.listItem}>Home</li>      
                    </Link>
                    <Link href="/contact">
                        <li className={styles.listItem}>Customer Service</li>      
                    </Link>
                </ul>
                <ul className={styles.list}>
                    <Link href="/deliveryServices">
                        <li className={styles.listItem}>Delivery Services</li>       
                    </Link>
                    <Link href="/menu">
                        <li className={styles.listItem}>Gifts</li>       
                    </Link>
                    <Link href="/menu">
                        <li className={styles.listItem}>Delivery</li>       
                    </Link>
                    <Link href="/menu">
                        <li className={styles.listItem}>Pick Up</li>       
                    </Link>
                    <li className={`${styles.listItem} ${styles.bookTable}`}>Book Table <span className={styles.showPhoneNum}>Calling (+358) 412 345 678</span></li>
                    <Link href="/cart">
                        <li className={styles.listItem}>Check Out</li>
                    </Link>
                    <Link href="/login">
                        <li className={styles.listItem}>Sign In</li>
                    </Link>
                    <Link href="/register">
                        <li className={styles.listItem}>Sign Up</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.right}>
                <div className={styles.contact}>
                    <BiPhoneCall className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                    <BiNotepad className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                    <BiDonateHeart className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                    <MdOutlineDeliveryDining className={styles.contactIcons}/><span className={styles.phoneNum}>+358 412 345 678</span>
                </div>
                <div className={styles.listIcons}>
                    <Link href="https://www.linkedin.com/in/tram-tran-924301207/" >
                        <IoLogoLinkedin className={styles.icons}/>
                    </Link>
                    <Link href="https://github.com/tramtran0497">
                        <IoLogoGithub className={styles.icons}/>
                    </Link>
                    <IoLogoWhatsapp className={styles.icons}/>
                    <IoLogoFacebook className={styles.icons}/>
                </div>
                <h6>© CopyRight Tram Tran 2022</h6>
            </div>
        </div>
    )
}