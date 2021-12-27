import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartPage, ProductDesc } from "../pages";
import * as ROUTES from "../constant/route";
export default class PageRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.CART_PAGE} element={<CartPage />} />
          <Route path={ROUTES.PRODUCT_DESC} element={<ProductDesc />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
