import React, { Component } from "react";
import { Cart } from "..";
import { Container, Inner, CardsHolder, CategoryTitle } from "./styles/hero";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: this.props.categories };
  }
  componentDidMount() {
    console.log(this.state.categories);
  }
  render() {
    return (
      <Container>
        <Inner>
          <CategoryTitle>All</CategoryTitle>
          <CardsHolder>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </CardsHolder>
        </Inner>
      </Container>
    );
  }
}
