import { Component } from "react";
import { ShopCart } from "..";
import {
  Card,
  Content,
  Title,
  Image,
  CartIcon,
  Price,
  OutOfStock,
} from "./styles/cart";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/addToCartAction";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    return (
      <Card active={this.props.inStock}>
        <Link to={`/product/${this.props.product.id}`}>
          <Image src={this.props.src}>
            {this.props.inStock ? null : <OutOfStock>OUT OF STOCK</OutOfStock>}
          </Image>
        </Link>
        <CartIcon
          inStock={this.props.inStock}
          onClick={() =>
            this.props.inStock ? this.props.addToCart(this.props.product) : null
          }
        >
          <ShopCart />
        </CartIcon>
        <Content>
          <Title>{this.props.name}</Title>
          <Price>
            {this.props.currentSymbol}
            {
              this.props.prices.find(
                (price) => price.currency.symbol === this.props.currentSymbol
              ).amount
            }
          </Price>
        </Content>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentSymbol: state.currencies.currentSymbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
