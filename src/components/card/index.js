import { Component } from "react";
import { ShopCart } from "..";
import { Card, Content, Title, Image, CartIcon, Price } from "./styles/cart";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/addToCartAction";
import { Link } from "react-router-dom";
import { productDetails } from "../../redux/action/detailsAction";
class Cart extends Component {
  render() {
    return (
      <Card onClick={() => this.props.addProduct(this.props.product)}>
        <Link to={`/product/${this.props.product.id}`}>
          <Image src={this.props.src} />
        </Link>
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

const mapStateToProps = (state) => {
  return {
    data: state.product.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    addProduct: (product) => dispatch(productDetails(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
