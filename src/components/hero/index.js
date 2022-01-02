import React, { Component } from "react";
import { Cart } from "..";
import { Container, Inner, CardsHolder, CategoryTitle } from "./styles/hero";
import { connect } from "react-redux";
import { loadCategories } from "../../redux/action/categoryAction";

class Hero extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }
  render() {
    return (
      <Container>
        <Inner>
          <CategoryTitle>
            {this.props.categories[this.props.currentCategory].name}
          </CategoryTitle>
          <CardsHolder>
            {this.props.categories[this.props.currentCategory].products.map(
              (product) => (
                <Cart
                  product={product}
                  src={product.gallery[0]}
                  name={product.name}
                  price={product.prices[0].amount}
                  symbol={product.prices[0].currency.symbol}
                  key={product.id}
                />
              )
            )}
          </CardsHolder>
        </Inner>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
    products: state.products,
    currentCategory: state.categories.currentCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: () => dispatch(loadCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
