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
  ColorBox,
  Span,
  Text,
} from "./styles/my-bag";
// import AtttributesGroup from "../attributes-group";
import { connect } from "react-redux";
import { setActive } from "../../redux/action/myBagAction";
import {
  decrementItem,
  increaseItem,
} from "../../redux/action/addToCartAction";
class MyBag extends Component {
  getTotalPrice = () => {
    return this.props.carts
      .reduce((prev, current) => {
        const amount = current.prices.find(
          (p) => p.currency.symbol === this.props.currentSymbol
        ).amount;
        return amount * current.qtx + prev;
      }, 0)
      .toFixed(2);
  };
  getItemsCount = () => {
    return this.props.carts.reduce((prev, current) => {
      const qtx = current.qtx;
      return qtx + prev;
    }, 0);
  };
  render() {
    return (
      <Container active={this.props.active} {...this.props}>
        <ProductsGroup>
          <Text>
            <Span>My Bag,</Span>
            {this.getItemsCount()} items
          </Text>

          {this.props.carts.map((product) => (
            <Product key={product.cartKey}>
              <ProductDetails>
                <Group
                  justify="flex-start"
                  align="flex-start"
                  gap="16px"
                  direction="column"
                >
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>
                    {this.props.currentSymbol}
                    {product.prices
                      .find(
                        (price) =>
                          price.currency.symbol === this.props.currentSymbol
                      )
                      .amount.toFixed(2)}
                  </ProductPrice>
                </Group>
                {product.attributes.map((attrib) => {
                  return attrib.type === "swatch" ? (
                    <Group key={attrib.id} direction="column" gap="8px">
                      <ProductPrice>{attrib.name}</ProductPrice>
                      <Group align="center" gap="8px" direction="row">
                        <ColorBox bgColor={attrib.selectedAttribute.value} />
                      </Group>
                    </Group>
                  ) : (
                    <Group key={attrib.id} direction="column" gap="8px">
                      <ProductPrice>{attrib.name}</ProductPrice>
                      <Group align="center" gap="8px" direction="row">
                        <ProductSize
                          height={attrib.name === "Size" ? "23px" : "30px"}
                          width={attrib.name === "Size" ? "23px" : "42px"}
                          active={attrib.selectedAttribute.value}
                        >
                          {attrib.selectedAttribute.value}
                        </ProductSize>
                      </Group>
                    </Group>
                  );
                })}
              </ProductDetails>
              <ProductCount>
                <Group
                  align="center"
                  gap="30px"
                  justify="center"
                  direction="column"
                >
                  <Increment onClick={() => this.props.increaseItem(product)}>
                    +
                  </Increment>
                  <ItemCount>{product.qtx}</ItemCount>
                  <Decrement onClick={() => this.props.decrementItem(product)}>
                    -
                  </Decrement>
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
            <TotalPrice>
              {this.props.currentSymbol}
              {this.props.carts.length ? this.getTotalPrice() : 0}
            </TotalPrice>
          </Group>
          <Group justify="center" align="center" gap="16px">
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
    currentSymbol: state.currencies.currentSymbol,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    setActive: () => dispatch(setActive()),
    increaseItem: (product) => dispatch(increaseItem(product)),
    decrementItem: (product) => dispatch(decrementItem(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(MyBag);
