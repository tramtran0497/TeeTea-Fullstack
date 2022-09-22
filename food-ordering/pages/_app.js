import { Layout } from '../Components/Layout';
import '../styles/globals.css';
import { ThemeProvider } from '../ReactHooks/ThemeContext';
import { Provider } from 'react-redux';
import store from '../Redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
          <div>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
