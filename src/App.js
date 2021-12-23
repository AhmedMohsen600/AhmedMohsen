import React, { Component } from "react";
import Layout from "./layout/main";
import PageRoutes from "./router/router";
import { Provider } from "react-redux";
import store from "./store/store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <PageRoutes />
        </Layout>
      </Provider>
    );
  }
}

export default App;
