import React, { Component } from "react";
import {
  Container,
  ProductsGroup,
  Product,
  ProductDetails,
  ProductName,
  ProductPrice,
  ProductSize,
  ProductCount,
  ProductImage,
  Increment,
  ItemCount,
  Decrement,
  Group,
  ViewBag,
  CheckOut,
  TotalPrice,
} from "./styles/my-bag";
export default class MyBag extends Component {
  render() {
    return (
      <Container {...this.props}>
        <ProductsGroup>
          <Product>
            <ProductDetails>
              <Group gap="16px" direction="column">
                <ProductName>MAC BOOK</ProductName>
                <ProductPrice>$10000</ProductPrice>
              </Group>
              <Group gap="8px" direction="row">
                <ProductSize>S</ProductSize>
                <ProductSize>M</ProductSize>
              </Group>
            </ProductDetails>
            <ProductCount>
              <Group gap="30px" justify="center" direction="column">
                <Increment>+</Increment>
                <ItemCount>2</ItemCount>
                <Decrement>-</Decrement>
              </Group>
              <ProductImage />
            </ProductCount>
          </Product>
        </ProductsGroup>
        <Group direction="column" gap="32px">
          <Group width="100%" justify="space-between" direction="row">
            <TotalPrice>Total</TotalPrice>
            <TotalPrice>$100.00</TotalPrice>
          </Group>
          <Group gap="16px" justify="center">
            <ViewBag>VIEW BAG</ViewBag>
            <CheckOut>CHECK OUT</CheckOut>
          </Group>
        </Group>
      </Container>
    );
  }
}
