import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import theme from "../styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Global
        styles={css`
          @font-face {
            font-family: "Rage";
            src: url("/fonts/RageItalic.woff") format("woff");
          }
        `}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
