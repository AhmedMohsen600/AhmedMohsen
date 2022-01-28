import React, { Component } from "react";
import { Header } from "../components";
import { connect } from "react-redux";
import { setDropdown } from "../redux/action/myBagAction";
class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main onClick={() => this.props.setDropDown("close")}>
          {this.props.children}
        </main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDropDown: (isActive) => dispatch(setDropdown(isActive)),
  };
};

export default connect(null, mapDispatchToProps)(Layout);
