import { useState } from 'react';
import styles from '../styles/DeliveryPolicy.module.css';

export const DeliveryCard = ({ delivery }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleMore = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className={styles.serviceWrapper}>
        <h4 onClick={toggleMore}>{delivery.title}</h4>
        {
            isShowMore ? (
                <div className={styles.serviceContent}>
                    <p>{delivery.subtitle}</p>
                    <h5>TeeTea Service: </h5>
                        {
                            delivery.content?.map(each => <p>{each}</p>)
                        }
                </div>
            ) : null
        }
    </div>
  );
};