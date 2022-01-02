import { Component } from "react";
import { ShopCart } from "..";
import { Card, Content, Title, Image, CartIcon, Price } from "./styles/cart";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/addToCartAction";

class Cart extends Component {
  render() {
    return (
      <Card>
        <Image src={this.props.src} />
        <CartIcon onClick={() => this.props.addToCart(this.props.product)}>
          <ShopCart />
        </CartIcon>
        <Content>
          <Title>{this.props.name}</Title>
          <Price>
            {this.props.symbol}
            {this.props.price}
          </Price>
        </Content>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(Cart);
