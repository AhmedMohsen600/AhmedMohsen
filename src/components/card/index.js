import { Component } from "react";
import { ShopCart } from "..";
import { Card, Content, Title, Image, CartIcon, Price } from "./styles/cart";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || "",
      price: this.props.price || "",
      symbol: this.props.symbol || "",
      src: this.props.src || "",
    };
  }
  render() {
    return (
      <Card>
        <Image src={this.state.src || ""}></Image>
        <CartIcon
          onClick={() => {
            console.log("Added");
          }}
        >
          <ShopCart />
        </CartIcon>
        <Content>
          <Title>
            {this.state.symbol || ""}
            {this.state.name || ""}
          </Title>
          <Price>
            {this.state.symbol || ""}
            {this.state.price || ""}
          </Price>
        </Content>
      </Card>
    );
  }
}
