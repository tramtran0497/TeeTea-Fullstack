import NextImage from 'next/image';
import styles from '../styles/Image.module.css';

const customLoader = ({ src }) => {
  return src;
};

export default function Image(props) {
  return <NextImage {...props} loader={customLoader} unoptimized={true} className={styles.img} />;
}
