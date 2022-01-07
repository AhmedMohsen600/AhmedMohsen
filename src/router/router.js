import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { CartsPage, ListPage, ProductDetailsPage } from "../pages";
import * as ROUTES from "../constant/route";

export default class PageRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path={ROUTES.CART_PAGE} element={<ListPage />} />
        <Route path={ROUTES.CARTS_PAGE} element={<CartsPage />} />
        <Route path={ROUTES.PRODUCT_DESC} element={<ProductDetailsPage />} />
      </Routes>
    );
  }
}
