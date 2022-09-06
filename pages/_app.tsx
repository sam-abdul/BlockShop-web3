import '@fortawesome/fontawesome-svg-core/styles.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { MoralisProvider } from 'react-moralis'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
   
      <MoralisProvider
        appId="QkQVKF2gkTm4i1swWhsfq4FbamWhgKnHWyOq5h9d"
        serverUrl="https://jrckdbttmgih.usemoralis.com:2053/server"
      >
         <Provider store={store}>
        <Component {...pageProps} />
        </Provider>
      </MoralisProvider>
 
  );
}

export default MyApp
