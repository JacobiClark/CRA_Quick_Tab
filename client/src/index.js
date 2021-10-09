import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Auth0Provider
      domain="dev-md7z8edx.us.auth0.com"
      clientId="0jJPkKTrGLgQGkuD5ThUUKNXVvt19DDo"
      redirectUri={window.location.origin}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0Provider>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
