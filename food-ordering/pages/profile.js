import styles from "../styles/Profile.module.css";
import Head from 'next/head';

export default function profile(){
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        Profile
    </div>
  )
};