import Head from 'next/head';
import Image from 'next/image';
import { ListBestProducts } from '../Components/ListBestProducts';
import { SlidesFeature } from '../Components/SlidesFeature';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <SlidesFeature/>
      <ListBestProducts/>
    </div>
  )
}
