import { useEffect, useContext, useState } from 'react';
import styles from '../styles/NavBarUser.module.css';
import Image from './Image';
import {
  IoSettingsOutline,
  IoLogOutOutline,
  IoRestaurantOutline,
  IoFastFoodOutline,
  IoGiftOutline,
  IoHelpCircleOutline,
  IoLogInOutline,
  IoPersonAddOutline,
} from 'react-icons/io5';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../Redux/User/Auth/actions';

export const NavBarUser = ({ style }) => {
  const [user, setUser] = useState({})
  const { userInfo, success, error } = useSelector((state) => state.userLoggedIn);
  const dispatch = useDispatch()
  const handleLogOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token")
    dispatch(logInUser({}))
  };
  useEffect(() => {
    if(userInfo){
      setUser(userInfo)
    }
  },[userInfo]);


  if (success && userInfo) { 
    return (
      <div className={styles.containerUser} style={{ transform: `translateX(${style})` }}>
        <div className={styles.top}>
          <div className={styles.imgWrapper}>
            <Image src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" className={styles.img} width="50px" height="50px" />
          </div>
          <div className={styles.nameAccount}>
            <h2>{user.name}</h2>
            <Link href="/profile">
              <p>Edit your profile</p>
            </Link>
          </div>
        </div>
        <div className={styles.center}>
          <Link href="/orders">
            <div className={styles.navItem}>
              <IoFastFoodOutline className={styles.icon} />
              <p>My order</p>
            </div>
          </Link>
          <Link href="/profile">
            <div className={styles.navItem}>
              <IoGiftOutline className={styles.icon} />
              <p>Discount and Gifts</p>
            </div>
          </Link>
          <Link href="/profile">
            <div className={styles.navItem}>
              <IoRestaurantOutline className={styles.icon} />
              <p>My recent orders</p>
            </div>
          </Link>
          <Link href="/profile">
            <div className={styles.navItem}>
              <IoSettingsOutline className={styles.icon} />
              <p>Setting</p>
            </div>
          </Link>
          <Link href="/help">
            <div className={styles.navItem}>
              <IoHelpCircleOutline className={styles.icon} />
              <p>Help</p>
            </div>
          </Link>
        </div>
        <div className={styles.bottom} onClick={handleLogOut}>
          <IoLogOutOutline className={styles.icon} />
          <p>Log out</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.containerNoUser} style={{ transform: `translateX(${style})` }}>
        <Link href="/login">
          <div className={styles.navItem}>
            <IoLogInOutline className={styles.icon} />
            <p>Log In</p>
          </div>
        </Link>
        <Link href="/register">
          <div className={styles.navItem}>
            <IoPersonAddOutline className={styles.icon} />
            <p>Register</p>
          </div>
        </Link>
        <Link href="/help">
          <div className={styles.navItem}>
            <IoHelpCircleOutline className={styles.icon} />
            <p>Help</p>
          </div>
        </Link>
      </div>
    );
  }
};
