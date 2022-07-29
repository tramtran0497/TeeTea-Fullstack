import styles from '../styles/Event.module.css';
import { EventCard } from '../Components/EventCard';
import Head from 'next/head';
import { eventList } from '../fakeData/MenuData';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { fetchEvents } from '../Redux/FetchEvents/fetchEvents-actions';
import { FaTruckLoading, FaRegSadCry } from 'react-icons/fa';

export default function Event() {
  const dispatch = useDispatch();
  const listEvents = useSelector(state => state.fetchEvents.listEvents);
  const loading = useSelector(state => state.fetchEvents.loading);
  const error = useSelector(state => state.fetchEvents.error);

  useEffect(() => dispatch(fetchEvents()), []);
  // useEffect(() => console.log("Check events", listEvents, loading, error));
  if (loading)
    return (
      <div className={styles.containerLoading}>
        Loading... <FaTruckLoading style={{ fontSize: '30px', margin: '20px' }} />
      </div>
    );
  else if (error)
    return (
      <div className={styles.containerLoading}>
        Opps <FaRegSadCry style={{ fontSize: '30px', margin: '20px' }} />
        ...Problems happened! We are fixing.
      </div>
    );
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.eventCards}>
        <h1>NEWS</h1>
        {listEvents?.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
