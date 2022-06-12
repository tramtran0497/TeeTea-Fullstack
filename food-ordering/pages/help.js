import styles from "../styles/Help.module.css";
import Head from 'next/head';
import { RiQuestionnaireFill } from "react-icons/ri";
import { BsArrowReturnRight } from "react-icons/bs";


export default function help(){
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h1><RiQuestionnaireFill className={styles.icon}/> Questions & Answer</h1>
        <div className={styles.questionWrapper}>
          <h2>Does have any discounts for students?</h2>
          <p><BsArrowReturnRight style={{marginRight: "10px"}}/>Yes, of course! We always give 10% of bill for students.</p>
        </div>
        <div className={styles.questionWrapper}>
          <h2>Does have any discounts for students?</h2>
          <p><BsArrowReturnRight style={{marginRight: "10px"}}/>Yes, of course! We always give 10% of bill for students.</p>
        </div>
        <div className={styles.questionWrapper}>
        <h2>Does have any discounts for students?</h2>
        <p><BsArrowReturnRight style={{marginRight: "10px"}}/>Yes, of course! We always give 10% of bill for students.</p>
      </div>
        <p className={styles.command}>&quot;There are all common questions we received from customers, we hope that they can solve your questions. However, if having no same your thinking. Please contact us! &quot;</p>

      </div>
    </div>
  )
};