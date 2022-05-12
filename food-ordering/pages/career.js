import styles from "../styles/Career.module.css"
import { JobCard } from "../Components/JobCard"
import Head from 'next/head'
import {recruitList} from "../fakeData/MenuData"

export default function contact () {
    return (
        <div className={styles.container}>
            <Head>
                <title>TeeTea</title>
                <meta name="description" content="Best Street Food in Lahti" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.wrapper}>
                <h1>WE ARE HIRING...</h1>
                <div className={styles.cards}>
                    {recruitList.map(position => <JobCard position={position}/>)}
                </div>
            </div>
            <div className={styles.formApplyJob}>
                <form action="">
                    <input type="text" placeholder="How do we call you?"/>
                    <input type="text" placeholder="How do we send you a message?"/>
                    <input type="text" placeholder="How do we contact you?"/>
                    <input type="text" placeholder="Which position are you interested?"/>
                    <input type="text" placeholder="What do you wish for this position?"/>
                    <input type="text" placeholder="Part-time or Full-time?"/>
                    <textarea type="text" placeholder="Tell me more your previous experience and yourself..."/>
                    <button className={styles.btn}>Apply Application Form</button>
                </form>
            </div>
        </div>
    )
}