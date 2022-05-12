import styles from "../styles/Contact.module.css"
import Head from 'next/head'

export default function contact () {
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Customer Service</h1>
      <subtitle className={styles.subTil}>(We warmly welcome feedback from customers, they are strong power to develop us)</subtitle>
      <div className={styles.wrapper}>
        <form action="">
          <input type="text" placeHolder="Leave your name..." className={styles.input}/>
          <input type="email" placeHolder="Leave your email address..." className={styles.input}/>
          <input type="text" placeHolder="Leave your phone number..." className={styles.input}/>
          <select name="case" id="case" className={styles.select}>
            <option value="none">Choose your case...</option>
            <option value="compliment">Compliment</option>
            <option value="complain">Complain</option>
            <option value="support">Support</option>
            <option value="asking">Ask Questions</option>
          </select>
          <input type="text" placeHolder="Leave your words..." className={styles.input}/>
          <button className={styles.btn}>Send</button>
        </form>
      </div>
    </div>
  )
}
