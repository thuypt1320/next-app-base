import '../../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import {Provider} from "react-redux";
import {Auth} from "components/organisms/auth";
import {store} from "redux/stores";

function MyApp({ Component, pageProps }) {
  return(
      <ChakraProvider>
        <Provider store={store}>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </Provider>
      </ChakraProvider>
  );
}

export default MyApp;

