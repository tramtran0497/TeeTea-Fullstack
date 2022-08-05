import { useState } from 'react';
import styles from '../styles/Event.module.css';
import Image from './Image';

export const EventCard = ({ event }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleMore = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className={styles.eventCard}>
      <div className={styles.left}>
        <Image src={event.image} width="200px" height="180px" />
      </div>
      <div className={styles.right}>
        <h3>{event.title}</h3>
        <div>
          {event.firstWord}
          {isShowMore ? <p className={styles.des}>{event.description}</p> : ''}
          <span className={styles.expand} id={event.id} onClick={toggleMore}>
            {!isShowMore ? 'Read more...' : 'Less more'}
          </span>
        </div>
      </div>
    </div>
  );
};
