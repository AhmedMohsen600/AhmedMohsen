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
import { setActive } from "../../redux/action/myBagAction";
class MyBag extends Component {
  render() {
    console.log(this.props.prices);
    return (
      <Container active={this.props.active} {...this.props}>
        <ProductsGroup>
          <p>
            <span
              style={{
                fontWeight: "700",
                fontSize: "16px",
                marginRight: "3px",
              }}
            >
              My Bag,
            </span>
            {this.props.carts.length} items
          </p>

          {this.props.carts.map((product) => (
            <Product key={product.name}>
              <ProductDetails>
                <Group
                  justify="flex-start"
                  align="flex-start"
                  gap="16px"
                  direction="column"
                >
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>${product.prices[0].amount}</ProductPrice>
                </Group>
                <Group align="center" gap="8px" direction="row">
                  <ProductSize>S</ProductSize>
                  <ProductSize>M</ProductSize>
                </Group>
              </ProductDetails>
              <ProductCount>
                <Group
                  align="center"
                  gap="30px"
                  justify="center"
                  direction="column"
                >
                  <Increment>+</Increment>
                  <ItemCount>2</ItemCount>
                  <Decrement>-</Decrement>
                </Group>
                <ProductImage src={product.gallery[0]} />
              </ProductCount>
            </Product>
          ))}
        </ProductsGroup>
        <Group direction="column" gap="32px">
          <Group
            align="center"
            width="100%"
            justify="space-between"
            direction="row"
          >
            <TotalPrice>Total</TotalPrice>
            <TotalPrice>$500</TotalPrice>
          </Group>
          <Group align="center" gap="16px">
            <ViewBag onClick={() => this.props.setActive()} to="/carts">
              VIEW BAG
            </ViewBag>
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
    active: state.active.active,
    prices: state.carts.data.map((item) => item.prices),
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    setActive: () => dispatch(setActive()),
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(MyBag);
