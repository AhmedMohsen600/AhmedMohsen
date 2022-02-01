import React, { Component } from "react";
import styled from "styled-components";
class ShopCart extends Component {
  render() {
    return <ShopCartIcon />;
  }
}
const ShopCartIcon = styled.div`
  background: url("/images/shop-cart.svg") center / cover no-repeat;
  width: 24px;
  height: 23px;
`;
export default ShopCart;
