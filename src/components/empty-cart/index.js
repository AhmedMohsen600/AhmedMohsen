import React, { Component } from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { setActive } from "../../redux/action/myBagAction";

class EmptyCart extends Component {
  getItemsCount = () => {
    return this.props.carts.reduce((prev, current) => {
      const qtx = current.qtx;
      return qtx + prev;
    }, 0);
  };

  render() {
    return (
      <Div
        onClick={() => {
          this.props.setActive();
        }}
        {...this.props}
      >
        <RoundItemCount>{this.getItemsCount()}</RoundItemCount>
        <EmptyCartHolder />
      </Div>
    );
  }
}

const Div = styled.div`
  position: relative;
  cursor: pointer;
`;

const EmptyCartHolder = styled.div`
  background: url("/images/empty-cart.svg") center / cover no-repeat;
  height: 20px;
  width: 20px;
  position: relative;
  cursor: pointer;
`;

const RoundItemCount = styled.div`
  position: absolute;
  top: -40%;
  right: -50%;
  width: 20px;
  height: 20px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 13px;
  z-index: 10;
`;

const mapStateToProps = (state) => {
  return {
    carts: state.carts.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setActive: () => dispatch(setActive()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EmptyCart);
