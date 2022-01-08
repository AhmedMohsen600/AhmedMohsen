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
import { updateProductInCart } from "../../redux/action/addToCartAction";
class AllCarts extends Component {
  //   componentDidMount() {
  //     console.log(this.props);
  //   }
  state = {
    size: "m",
  };
  obj = [
    {
      name: "S",
      size: "s",
    },
    {
      name: "M",
      size: "m",
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
                  <ProductPrice>${product.prices[0].amount}</ProductPrice>
                  <Group
                    alignItems="flex-start"
                    justify="flex-start"
                    direction="row"
                    gap="12px"
                  >
                    {this.obj.map((ob) => (
                      <SizeBtn
                        key={ob.size}
                        onClick={() => {
                          // const updatedProduct = { ...product };
                          // updatedProduct.
                          // this.props.updateProducrt(product);
                          this.setState({ size: ob.size });
                        }}
                        active={this.state.size === ob.size ? 1 : 0}
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
export const mapDispatchToProps = (disptach) => {
  return {
    updateProducrt: (product) => disptach(updateProductInCart(product)),
  };
};
export default connect(mapStateToProps)(AllCarts);
