import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartsPage, ListPage, ProductDesc } from "../pages";
import * as ROUTES from "../constant/route";
import { Header } from "../components";
export default class PageRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.CART_PAGE} element={<ListPage />} />
          <Route path={ROUTES.CARTS_PAGE} element={<CartsPage />} />
          <Route path={ROUTES.PRODUCT_DESC} element={<ProductDesc />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
