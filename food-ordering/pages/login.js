import { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/LogIn.module.css';
import { ThemeContext } from '../ReactHooks/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../Redux/User/Auth/actions';
import { useRouter } from 'next/router'

export default function Login() {
  const darkTheme = useContext(ThemeContext);
  const router = useRouter()

  const [account, setAccount] = useState({ email: '', password: '' });
 const dispatch = useDispatch()
//  const {loading, success, error, userInfo} = useSelector(state => state.userLoggedIn)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(account))
    router.push("/loggedIn")  

  };
  return (
    <div className={styles.container}>
      <Head>
        <title>TeeTea</title>
        <meta name="description" content="Best Street Food in Lahti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={styles.formLogIn}
        style={{ backgroundColor: darkTheme ? 'black' : 'white' }}
      >
        <h2>LOG IN</h2>
        <div className={styles.userName}>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            style={{ borderBottom: darkTheme ? '1px solid white' : '1px solid black' }}
            required
          />
        </div>
        <div className={styles.passWord}>
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            id="pwd"
            onChange={(e) => setAccount({ ...account, password: e.target.value })}
            style={{ borderBottom: darkTheme ? '1px solid white' : '1px solid black' }}
            required
          />
        </div>
        <button onClick={handleSubmit} className={styles.btn}>
          SIGN IN
        </button>
        <div className={styles.getPwdandSignUp}>
          <p>Forget your password</p>
          <p>Create a new account</p>
        </div>
      </div>
    </div>
  );
}
