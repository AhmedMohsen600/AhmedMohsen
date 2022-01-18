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
            {this.props.categories[this.props.currentCategory].name
              ? this.props.categories[this.props.currentCategory].name.replace(
                  /./,
                  (c) => c.toUpperCase()
                )
              : ""}
          </CategoryTitle>
          <CardsHolder>
            {this.props.categories[this.props.currentCategory].products.map(
              (product) => (
                <Cart
                  inStock={product.inStock}
                  product={product}
                  src={product.gallery[0]}
                  name={product.name}
                  price={product.prices}
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
    currentCategory: state.categories.currentCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: () => dispatch(loadCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
