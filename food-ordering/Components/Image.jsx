import NextImage from 'next/image';
import styles from "./Image";

const customLoader = ({ src }) => {
  return src;
};

export default function Image(props) {
  return <NextImage {...props} loader={customLoader} unoptimized={true} className={styles.img} width="100%" height="100%"/>;
}
