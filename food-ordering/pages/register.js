import styles from '../styles/Register.module.css';
import Head from 'next/head';

export default function register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.formContainer}>
        <h1>SIGN UP</h1>
        <form action="" className={styles.form}>
          <input type="text" placeHolder="Leave your username..." className={styles.input} />
          <input type="password" placeHolder="Leave your password..." className={styles.input} />
          <input type="password" placeHolder="Confirm your password..." className={styles.input} />
          <input type="email" placeHolder="Leave your email address..." className={styles.input} />
          <input type="text" placeHolder="Leave your phone number..." className={styles.input} />
          <select name="case" id="case" className={styles.select}>
            <option value="none">&quot;You know TeeTea&quot; by...</option>
            <option value="compliment">Friends or Family</option>
            <option value="complain">Social Media</option>
            <option value="support">Poster</option>
          </select>
          <div className={styles.radio}>
            <input type="checkbox" id="agree" name="agree" value="agree" />
            <label htmlFor="agree">
              By creating an account, you confirm that agree to be bound by our Privacy Policy and
              Terms of Use
            </label>
          </div>
          <div className={styles.radio}>
            <input type="checkbox" id="disagree" name="disagree" value="disagree" />
            <label htmlFor="disagree">
              You would like to receive events from TeeTea through your contact
            </label>
          </div>
          <button className={styles.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
}
