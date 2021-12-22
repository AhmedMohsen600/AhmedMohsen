import { Component } from "react";
import { ShopCart } from "..";
import { Card, Content, Title, Image, CartIcon, Price } from "./styles/cart";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "MAc", price: "100", symbol: "$", src: "" };
  }
  render() {
    return (
      <Card>
        <Image src={this.state.src}></Image>
        <CartIcon
          onClick={() => {
            console.log("Added");
          }}
        >
          <ShopCart />
        </CartIcon>
        <Content>
          <Title>
            {this.state.symbol}
            {this.state.title}
          </Title>
          <Price>
            {this.state.symbol}
            {this.state.price}
          </Price>
        </Content>
      </Card>
    );
  }
}
