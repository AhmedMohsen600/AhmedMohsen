import React, { Component } from "react";
import { Cart } from "..";
import { Container, Inner, CardsHolder, CategoryTitle } from "./styles/hero";
import { connect } from "react-redux";
import { loadCategories } from "../../action/categoryAction";
class Hero extends Component {
  //   componentDidMount() {
  //     // console.log(this.props.categories.categories);
  //     // console.log(this.props.categories.categories.all.products);
  //   }

  render() {
    return (
      <Container>
        <Inner>
          <CategoryTitle>
            {this.props.categories.categories.all.name}
          </CategoryTitle>
          <CardsHolder>
            {this.props.categories.categories.all.products
              ? this.props.categories.categories.all.products.map((categ) => (
                  <Cart
                    src={categ.gallery[0]}
                    name={categ.name}
                    price={categ.prices[0].amount}
                    symbol={categ.prices[0].currency.symbol}
                    key={categ.id}
                  />
                ))
              : ""}
          </CardsHolder>
        </Inner>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: dispatch(loadCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
