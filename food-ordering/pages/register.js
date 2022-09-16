import styles from '../styles/Register.module.css';
import Head from 'next/head';
import FormSignUp from '../Components/FormSignUp';

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
        <FormSignUp/>
        
      </div>
    </div>
  );
}
