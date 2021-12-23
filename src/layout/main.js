import React, { Component } from "react";
import { Header } from "../components";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
      </>
    );
  }
}
