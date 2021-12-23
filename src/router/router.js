import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartPage, ProductDesc } from "../pages";
import { client } from "../service/apollo";
import { GET_CATEGORIES } from "../service/queries/get-categories";
import * as ROUTES from "../constant/route";
export default class PageRoutes extends Component {
  state = { categories: [], currentCategory: "tech" };

  async componentDidMount() {
    if (this.state.categories.length !== 0) return;
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
            path={ROUTES.CART_PAGE}
            element={<CartPage categories={this.state.categories} />}
          />
          <Route path={ROUTES.PRODUCT_DESC} element={<ProductDesc />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
