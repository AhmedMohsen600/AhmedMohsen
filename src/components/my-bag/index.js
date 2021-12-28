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
import { connect } from "react-redux";
class MyBag extends Component {
  render() {
    console.log(this.props.carts);
    return (
      <Container {...this.props}>
        <ProductsGroup>
          {this.props.carts.map((product) => (
            <Product key={product.name || ""}>
              <ProductDetails>
                <Group gap="16px" direction="column">
                  <ProductName>{product.name || ""}</ProductName>
                  <ProductPrice>${product.prices[0].amount}</ProductPrice>
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
                <ProductImage src={product.gallery[0] || ""} />
              </ProductCount>
            </Product>
          ))}
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

const mapStateToProps = (state) => {
  return {
    carts: state.carts.data,
  };
};

export default connect(mapStateToProps)(MyBag);
