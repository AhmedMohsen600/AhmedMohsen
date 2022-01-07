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
  state = {
    size: "",
  };
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
                    {product.description
                      ? product.description.replace(/([<p>/!<p>])/g, "")
                          .length > 170
                        ? product.description
                            .replace(/([<p>/!<p>h1h3])/g, "")
                            .slice(0, 90)
                        : product.description.replace(/([<p>/!<p>h1h3])/g, "")
                      : ""}
                  </ProductDesc>
                  <ProductPrice>${product.prices[0].amount}</ProductPrice>
                  <Group
                    alignItems="flex-start"
                    justify="flex-start"
                    direction="row"
                    gap="12px"
                  >
                    <SizeBtn
                      onClick={() => this.setState({ size: "s" })}
                      active={this.state.size === "s" ? 1 : 0}
                    >
                      S
                    </SizeBtn>
                    <SizeBtn
                      onClick={() => this.setState({ size: "m" })}
                      active={this.state.size === "m" ? 1 : 0}
                    >
                      M
                    </SizeBtn>
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
