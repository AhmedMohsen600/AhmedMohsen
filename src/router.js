import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartPage } from "./pages";
import { client } from "./service/apollo";
import { GET_CATEGORIES } from "./service/queries/get-categories";
export default class PageRoutes extends Component {
  state = { categories: [], currentCategory: "tech" };

  async componentDidMount() {
    const {
      data: { categories },
    } = await client.query({ query: GET_CATEGORIES });

    const categ = {};
    for (let category of categories) {
      categ[category.name] = category;
    }

    this.setState({ categories: categ });
    console.log(this.state.categories);
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<CartPage categories={this.state.categories} />}
          />
          <Route path="/product-desc" element={<div>koko</div>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
