import React from "react";
import Layout from "./layout/main";
import PageRoutes from "./router";
class App extends React.Component {
  render() {
    return (
      <Layout>
        <PageRoutes />
      </Layout>
    );
  }
}

export default App;
