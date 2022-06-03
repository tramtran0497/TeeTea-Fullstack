import styles from "../styles/Event.module.css"
import { EventCard } from "../Components/EventCard"
import Head from 'next/head'
import { eventList } from "../fakeData/MenuData"

export default function Event() {
    return(
        <div className={styles.container}>
            <Head>
                <title>TeeTea</title>
                <meta name="description" content="Best Street Food in Lahti" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>NEWS</h1>
            <div className={styles.eventCards}>
                {eventList.map((event, index) => <EventCard event={event} key={index}/>)}
            </div>
        </div>
    )
}