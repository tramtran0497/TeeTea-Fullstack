import { Layout } from '../Components/Layout'
import '../styles/globals.css'
import {ThemeProvider} from "../ReactHooks/ThemeContext"
import { Provider } from "react-redux";
import store from "../Redux/store"
import { AuthenticationProvider } from '../ReactHooks/AutheticationContext';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthenticationProvider>
          <div>
              <Layout>
                <Component {...pageProps}/>
              </Layout>
          </div>
        </AuthenticationProvider>
      </ThemeProvider> 
    </Provider>
  )
}

export default MyApp
