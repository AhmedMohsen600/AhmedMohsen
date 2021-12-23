import React, { Component } from "react";
import { Hero } from "../components";

export default class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: this.props.categories };
  }
  componentDidMount() {
    // console.log("WE STILL HERE SWEETHEART");
    console.log(this.state.categories);
  }

  render() {
    return <Hero categories={this.state.categories} />;
  }
}
