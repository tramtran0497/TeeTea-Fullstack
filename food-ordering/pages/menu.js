import styles from '../styles/Menu.module.css';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { MenuSlidesCard } from '../Components/MenuSlidesCard';
import { useState } from 'react';
import { MenuList } from '../Components/MenuList';
import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaTruckLoading, FaRegSadCry } from 'react-icons/fa';

export default function Menu() {
  const [index, setIndex] = useState(0);
  const [menuName, setMenuName] = useState('main');
  const [listDisplayMain, setListDisplayMain] = useState([]);
  const [listDisplayLD, setListDisplayLD] = useState([]);
  const [listDisplaySnack, setListDisplaySnack] = useState([]);
  const [listDisplayDrink, setListDisplayDrink] = useState([]);
  const listProducts = useSelector((state) => state.fetchProduct.listProducts);
  const loading = useSelector((state) => state.fetchProduct.loading);
  const error = useSelector((state) => state.fetchProduct.error);

  useEffect(() => {
    listProducts.length &&
      listProducts.map((product) => {
        if (product.type === 'Main') {
          setListDisplayMain((pre) => [...pre, product]);
        } else if (product.type === 'Lunch and Dinner') {
          setListDisplayLD((pre) => [...pre, product]);
        } else if (product.type === 'Snack') {
          setListDisplaySnack((pre) => [...pre, product]);
        } else if (product.type === 'Drinks') {
          setListDisplayDrink((pre) => [...pre, product]);
        }
      });
  }, [listProducts]);

  // useEffect(() => console.log("Check in menu", listDisplayMain, listDisplayDrink, listDisplayLD, listDisplaySnack));

  const handleClickNavBar = (name) => {
    setMenuName(name);
  };

  const handleClickMenuSlides = (direction) => {
    if (direction === 'left') {
      setIndex(index !== 0 ? index - 1 : 3);
    } else {
      setIndex(index !== 3 ? index + 1 : 0);
    }
  };

  const mainList = listProducts.filter((product) => product.type === 'Main Item');
  const drinkList = listProducts.filter((product) => product.type === 'Drink Item');
  const snackList = listProducts.filter((product) => product.type === 'Snack Item');
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

      <h1>MENU</h1>
      <div className={styles.btnWrapper}>
        <button className={styles.btn}>ORDER PICKUP</button>
        <button className={styles.btn}>ORDER DELIVERY</button>
        <button className={styles.btn}>GIFT FOR FRIENDS AND FAMILY</button>
      </div>
      <div className={styles.navBarMenu}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>LUNCH & DINNER</li>
          <li className={styles.navItem} onClick={() => handleClickNavBar('main')}>
            MAIN DISHES
          </li>
          <li className={styles.navItem} onClick={() => handleClickNavBar('drinks')}>
            DRINKS
          </li>
          <li className={styles.navItem} onClick={() => handleClickNavBar('snacks')}>
            SNACKS
          </li>
        </ul>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.lunchDinnerMenu}>
          <BsFillArrowLeftCircleFill
            className={styles.icon}
            onClick={() => handleClickMenuSlides('left')}
            style={{ left: '10px' }}
          />
          <div
            className={styles.listLDDishes}
            style={{ transform: `translateX(${-45 * index}vw)` }}
            id="lunchDinner"
          >
            {listDisplayLD.map((product) => (
              <MenuSlidesCard dish={product} key={product.id} />
            ))}
          </div>
          <BsFillArrowRightCircleFill
            className={styles.icon}
            onClick={() => handleClickMenuSlides('right')}
            style={{ right: '10px' }}
          />
        </div>
        <div className={styles.menuWrapper}>
          <MenuList
            id="mainMenu"
            menu="MAIN DISHES..."
            listItemsData={listDisplayMain}
            isShowed={menuName === 'main' ? true : false}
          />
          <MenuList
            id="drinksMenu"
            menu="DRINKS..."
            listItemsData={listDisplayDrink}
            isShowed={menuName === 'drinks' ? true : false}
          />
          <MenuList
            id="snacksMenu"
            menu="SNACKS..."
            listItemsData={listDisplaySnack}
            isShowed={menuName === 'snacks' ? true : false}
          />
        </div>
      </div>
    </div>
  );
}
