import { Component } from "react";
import { ShopCart } from "..";
import {
  Card,
  Content,
  Title,
  Image,
  CartIcon,
  Price,
  // OutOfStock,
} from "./styles/cart";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/addToCartAction";
import { Link } from "react-router-dom";
// import { productDetails } from "../../redux/action/detailsAction";
class Cart extends Component {
  render() {
    return (
      <Card active={this.props.inStock}>
        <Link to={`/product/${this.props.product.id}`}>
          <Image src={this.props.src}>
            {/* {this.props.inStock ? null : <OutOfStock>OUT OF STOCK</OutOfStock>} */}
          </Image>
        </Link>
        <CartIcon onClick={() => this.props.addToCart(this.props.product)}>
          <ShopCart />
        </CartIcon>
        <Content>
          <Title>{this.props.name}</Title>
          <Price>
            {this.props.currentSymbol}
            {
              this.props.price.find(
                (pr) => pr.currency.symbol === this.props.currentSymbol
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
