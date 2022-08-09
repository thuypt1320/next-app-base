import '../../styles/globals.css';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from "react-redux";
import {Auth} from "components/organisms/auth";
import {store} from "redux/stores";
import {theme} from "../theme";
import {ThemeProvider} from "@emotion/react";


function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider resetCSS theme={theme}>
        <Provider store={store}>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </Provider>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;

