import React, { Component } from "react";
import {
  ProductName,
  ProductDesc,
  SizeBtn,
  Group,
  ProductPrice,
} from "../all-carts/styles/all-carts";
import {
  Container,
  Inner,
  ContentHolder,
  BigImage,
  SmallImage,
  SmallImagesGroup,
  DetailsHolder,
  SizeText,
  PriceText,
  AddToCartBtn,
  TextDesc,
  Product,
} from "./styles/product-details";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/addToCartAction";
import btnData from "../../fixtures/btn-size.json";
class ProductDetails extends Component {
  state = {
    size: "xs",
    src: "",
  };

  render() {
    return (
      <Container>
        <Inner>
          <Product>
            <SmallImagesGroup>
              {this.props.product.gallery.map((src, index) => {
                if (index > 4) return null;
                return (
                  <SmallImage
                    onClick={() => this.setState({ src })}
                    key={index}
                    src={src}
                  />
                );
              })}
            </SmallImagesGroup>
            <ContentHolder>
              <BigImage
                src={
                  this.state.src
                    ? this.state.src
                    : this.props.product.gallery[0]
                }
              />
              <DetailsHolder>
                <Group direction="column" gap="16px">
                  <ProductName>{this.props.product.brand}</ProductName>
                  <ProductDesc>{this.props.product.name}</ProductDesc>
                </Group>
                <Group gap="8px" direction="column">
                  <SizeText>SIZE:</SizeText>
                  <Group gap="12px" direction="row">
                    {btnData.map((size) => (
                      <SizeBtn
                        key={size.name}
                        onClick={() => this.setState({ size: size.name })}
                        active={this.state.size === size.name ? 1 : 0}
                      >
                        {size.text}
                      </SizeBtn>
                    ))}
                  </Group>
                </Group>
                <Group direction="column" gap="20px">
                  <PriceText>PRICE:</PriceText>
                  <ProductPrice>
                    {this.props.product.prices[0].currency.symbol}
                    {this.props.product.prices[0].amount}
                  </ProductPrice>
                  <AddToCartBtn
                    onClick={() => {
                      // let productObj = { ...this.props.product };
                      this.props.addToCart(this.props.product);
                    }}
                  >
                    ADD TO CART
                  </AddToCartBtn>
                </Group>
                <TextDesc
                  dangerouslySetInnerHTML={{
                    __html: this.props.product.description,
                  }}
                />
              </DetailsHolder>
            </ContentHolder>
          </Product>
        </Inner>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
