import styles from '../styles/SlidesFeature.module.css';
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import Image from './Image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchNews } from '../Redux/FetchNews/fetchNews-actions';
import { FaTruckLoading, FaRegSadCry } from 'react-icons/fa';

export const SlidesFeature = () => {
  const [index, setIndex] = useState(0);
  const [listDisplayNews, setListDisplayNews] = useState([]);
  const dispatch = useDispatch();
  const listNews = useSelector((state) => state.fetchNews.listNews);
  const loading = useSelector((state) => state.fetchNews.loading);
  const error = useSelector((state) => state.fetchNews.error);
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => setListDisplayNews(listNews), [listNews]);

  // Detail news
  // useEffect(() => console.log(listNews));

  const handleSlides = (direction) => {
    const lastIndexSlide = listDisplayNews?.length - 1;

    if (direction === 'left') {
      setIndex(index !== 0 ? index - 1 : lastIndexSlide);
    } else {
      setIndex(index !== lastIndexSlide ? index + 1 : 0);
    }
  };
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
      <BiChevronsLeft
        className={styles.icon}
        style={{ left: '20px' }}
        onClick={() => handleSlides('left')}
      />
      <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
        {listDisplayNews.map((news) => (
          <div className={styles.imgWrapper} key={news.id}>
            <div className={styles.info}>
              <h2>{news.title}</h2>
              <p>{news.subtitle}</p>
            </div>
            <div className={styles.imgWrapper}>
              <Image
                src={news.image}
                alt={news.title}
                layout="fill"
              />
            </div>
            
          </div>
        ))}
      </div>
      <BiChevronsRight
        className={styles.icon}
        style={{ right: '20px' }}
        onClick={() => handleSlides('right')}
      />
    </div>
  );
};
