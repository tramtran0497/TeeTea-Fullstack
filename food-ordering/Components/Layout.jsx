import { Footer } from './Footer';
import { Header } from './Header';
import { useContext } from 'react';
import { ThemeContext } from '../ReactHooks/ThemeContext';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../Redux/FetchData/fetchData-actions';
import { useEffect } from 'react';

export const Layout = ({ children }) => {
  const darkTheme = useContext(ThemeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: darkTheme ? 'black' : 'white',
          color: darkTheme ? 'white' : 'black',
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
