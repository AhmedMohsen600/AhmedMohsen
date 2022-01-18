import { ApolloProvider } from "@apollo/client";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { client } from "./service/apollo";
import { GlobalStyles } from "./global-styles";

render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);

reportWebVitals();
