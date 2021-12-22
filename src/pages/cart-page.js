import React, { Component } from "react";
import { Hero } from "../components";
export default class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: this.props.categories };
  }

  render() {
    return (
      <>
        <Hero categories={this.state.categories} />
      </>
    );
  }
}
