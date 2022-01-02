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
class AllCarts extends Component {
  //   componentDidMount() {
  //     console.log(this.props);
  //   }

  render() {
    return (
      <Container>
        <Inner>
          <Title>Cart</Title>
          {this.props.carts.map((product) => (
            <Product key={product.name}>
              <DetailsHolder>
                <ProductName>{product.name}</ProductName>
                <Group
                  alignItems="flex-start"
                  justify="flex-start"
                  direction="column"
                  gap="24px"
                >
                  <ProductDesc>
                    {product.description.replace(/([<p>/!<p>])/g, "")}
                  </ProductDesc>
                  <ProductPrice>${product.prices[0].amount}</ProductPrice>
                  <Group
                    alignItems="flex-start"
                    justify="flex-start"
                    direction="row"
                    gap="12px"
                  >
                    <SizeBtn>S</SizeBtn>
                    <SizeBtn active="kok">M</SizeBtn>
                  </Group>
                </Group>
              </DetailsHolder>
              <ImageHolder>
                <Group
                  alignItems="center"
                  justify="space-between"
                  direction="column"
                >
                  <IncrementBtn>+</IncrementBtn>
                  <ItemCount>1</ItemCount>
                  <DecrementBtn>-</DecrementBtn>
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
  };
};

export default connect(mapStateToProps)(AllCarts);
