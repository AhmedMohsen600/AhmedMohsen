import React, { Component } from "react";
import { Header } from "../components";
import { CartPage } from "../pages";
import { client } from "../service/apollo";
import { GET_CATEGORIES } from "../service/queries/get-categories";
export default class Layout extends Component {
  state = { categories: {}, currentCategory: "tech" };

  async componentDidMount() {
    // console.log({ data: this.state });
    const {
      data: { categories },
    } = await client.query({ query: GET_CATEGORIES });

    const categ = {};
    for (let category of categories) {
      categ[category.name] = category;
    }

    this.setState({ categories: categ });
  }

  render() {
    console.log(this.state.categories);
    return (
      <>
        <Header />
        <main>
          <CartPage categories={this.state.categories} />
        </main>
      </>
    );
  }
}
