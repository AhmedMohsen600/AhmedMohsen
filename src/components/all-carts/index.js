import React, { Component } from "react";
import {
  Container,
  Inner,
  ProductName,
  ProductPrice,
  ProductDesc,
  Product,
  Image,
  Title,
  SizeBtn,
  DecrementBtn,
  IncrementBtn,
  Group,
  DetailsHolder,
  ImageHolder,
} from "./styles/all-carts";
import { connect } from "react-redux";
import { ItemCount } from "../my-bag/styles/my-bag";
import {
  decrementItem,
  increaseItem,
  updateProductInCart,
} from "../../redux/action/addToCartAction";
class AllCarts extends Component {
  //   componentDidMount() {
  //     console.log(this.props);
  //   }
  state = {
    size: "m",
  };
  obj = [
    {
      name: "XS",
      size: "xs",
    },
    {
      name: "S",
      size: "s",
    },
    {
      name: "M",
      size: "m",
    },
    {
      name: "L",
      size: "l",
    },
  ];

  render() {
    return (
      <Container>
        <Inner>
          <Title>Cart</Title>
          {this.props.carts.map((product) => (
            <Product key={product.name}>
              <DetailsHolder>
                <ProductName>{product.brand}</ProductName>
                <Group
                  alignItems="flex-start"
                  justify="flex-start"
                  direction="column"
                  gap="24px"
                >
                  <ProductDesc>{product.name}</ProductDesc>
                  <ProductPrice>
                    {this.props.currentSymbol}
                    {Math.floor(
                      product.prices.find(
                        (price) =>
                          price.currency.symbol === this.props.currentSymbol
                      ).amount * product.qtx
                    )}
                  </ProductPrice>
                  <Group
                    alignItems="flex-start"
                    justify="flex-start"
                    direction="row"
                    gap="12px"
                  >
                    {this.obj.map((ob) => (
                      <SizeBtn
                        key={ob.size}
                        active={product.size === ob.size ? 1 : 0}
                      >
                        {ob.name}
                      </SizeBtn>
                    ))}
                  </Group>
                </Group>
              </DetailsHolder>
              <ImageHolder>
                <Group
                  alignItems="center"
                  justify="space-between"
                  direction="column"
                >
                  <IncrementBtn
                    onClick={() => {
                      this.props.increaseItem(product);
                    }}
                  >
                    +
                  </IncrementBtn>
                  <ItemCount>{product.qtx}</ItemCount>
                  <DecrementBtn
                    onClick={() => this.props.decrementItem(product)}
                  >
                    -
                  </DecrementBtn>
                </Group>
                <Image src={product.gallery[0]} />
              </ImageHolder>
            </Product>
          ))}
        </Inner>
      </Container>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    carts: state.carts.data,
    currentSymbol: state.currencies.currentSymbol,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    updateProducrt: (product) => dispatch(updateProductInCart(product)),
    increaseItem: (product) => dispatch(increaseItem(product)),
    decrementItem: (product) => dispatch(decrementItem(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllCarts);
