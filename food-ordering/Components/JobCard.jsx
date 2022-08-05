import Image from './Image';
import styles from '../styles/Career.module.css';

export const JobCard = ({ position }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <Image src={position.image} width="280px" height="200px" />
      </div>
      <h2>{position.title}</h2>
      <p>{position.description}</p>
      <p>We need: {position.quantity} member(s)</p>
    </div>
  );
};
