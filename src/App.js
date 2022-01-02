import React, { Component } from "react";
import Layout from "./layout/main";
import PageRoutes from "./router/router";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <PageRoutes />
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
