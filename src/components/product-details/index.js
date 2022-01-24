import React, { Component } from "react";
import {
  ProductName,
  ProductDesc,
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
  PriceText,
  AddToCartBtn,
  TextDesc,
  Product,
} from "./styles/product-details";
import ProductBox from "../attributes-group";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/addToCartAction";
import {
  clearProduct,
  getProduct,
  updateProduct,
} from "../../redux/action/getProductAction";

class ProductDetails extends Component {
  state = {
    src: "",
  };

  componentDidMount() {
    this.props.getProduct(window.location.href.slice(30));
  }

  componentWillUnmount() {
    this.props.clearProduct();
  }

  changeAttribute = (selectedItem, attributeId) => {
    console.log(selectedItem);
    // console.log("COLOR", this.state.color);
    const productObj = {
      ...this.props.product,
      attributes: this.props.product.attributes.map((attr) => {
        const mappedAttribute = attr;
        if (attributeId === attr.id)
          mappedAttribute.selectedAttribute = selectedItem;
        return mappedAttribute;
      }),
    };
    this.props.updateProduct(productObj);
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
                <Group gap="12px" direction="column">
                  {this.props.product.attributes.length
                    ? this.props.product.attributes.map((attrib) => {
                        return (
                          <ProductBox
                            onAttributeChange={this.changeAttribute}
                            attrib={attrib}
                          />
                        );
                      })
                    : null}
                </Group>
                <Group direction="column" gap="20px">
                  <PriceText>PRICE:</PriceText>
                  <ProductPrice>
                    {this.props.currentSymbol}
                    {this.props.product.prices.length
                      ? this.props.product.prices.find(
                          (pr) =>
                            pr.currency.symbol === this.props.currentSymbol
                        ).amount
                      : "0"}
                  </ProductPrice>
                  <AddToCartBtn
                    onClick={() => this.props.addToCart(this.props.product)}
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
  // setting the initial value for selecterAttribute before we use onAttributeChange function.
  const product = state.product.data;
  product.attributes.map((attr) => {
    const mappedAttribute = attr;
    if (!mappedAttribute.selectedAttribute)
      mappedAttribute.selectedAttribute = attr.items[0];
    return mappedAttribute;
  });
  return {
    currentSymbol: state.currencies.currentSymbol,
    product: product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    getProduct: (id) => dispatch(getProduct(id)),
    updateProduct: (updatedProduct) => dispatch(updateProduct(updatedProduct)),
    clearProduct: () => dispatch(clearProduct()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
