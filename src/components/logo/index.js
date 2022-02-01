import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <LogoIcon />
      </Link>
    );
  }
}
const LogoIcon = styled.div`
  background: url("/images/logo.svg") center / cover no-repeat;
  width: 41px;
  height: 41px;
`;
export default Logo;
