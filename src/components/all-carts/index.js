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
  DecrementBtn,
  IncrementBtn,
  Group,
  DetailsHolder,
  ImageHolder,
  AttriBox,
} from "./styles/all-carts";
import { PriceText, SizeText } from "../product-details/styles/product-details";
import { ColorBox } from "../product-details/styles/product-details";
import { ItemCount } from "../my-bag/styles/my-bag";

import {
  decrementItem,
  increaseItem,
} from "../../redux/action/addToCartAction";
import { connect } from "react-redux";

class AllCarts extends Component {
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
                  <Group gap="12px" direction="column">
                    <PriceText>Price</PriceText>
                    <ProductPrice>
                      {this.props.currentSymbol}
                      {Math.floor(
                        product.prices.find(
                          (price) =>
                            price.currency.symbol === this.props.currentSymbol
                        ).amount * product.qtx
                      )}
                    </ProductPrice>
                  </Group>

                  <Group gap="12px" direction="column">
                    {product.attributes
                      ? product.attributes.map((attrib) => {
                          if (attrib.type === "swatch") {
                            return (
                              <Group
                                key={attrib.name}
                                gap="12px"
                                direction="column"
                              >
                                <SizeText>{attrib.name}</SizeText>
                                <Group gap="12px">
                                  <ColorBox
                                    key={attrib.id}
                                    bgColor={attrib.selectedAttribute.value}
                                    active={attrib.selectedAttribute.value}
                                  />
                                </Group>
                              </Group>
                            );
                          }
                          return (
                            <Group
                              key={attrib.name}
                              gap="12px"
                              direction="column"
                            >
                              <SizeText>{attrib.name}</SizeText>
                              <AttriBox active={attrib.selectedAttribute.value}>
                                {attrib.selectedAttribute.value}
                              </AttriBox>
                            </Group>
                          );
                        })
                      : null}
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
    increaseItem: (product) => dispatch(increaseItem(product)),
    decrementItem: (product) => dispatch(decrementItem(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllCarts);
