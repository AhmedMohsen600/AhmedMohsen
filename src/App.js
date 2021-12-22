import React from "react";

import Layout from "./layout/main";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout></Layout>
        {/* <Title title={this.state.currentCategory} />
        <Title koko={this.state.currentCategory} />
        <select onChange={(e) => this.onClickCategory(e)} defaultValue="tech">
          <option value="all">all</option>
          <option value="tech">tech</option>
          <option value="clothes">clothes</option>
        </select> */}
      </div>
    );
  }
}

export default App;
