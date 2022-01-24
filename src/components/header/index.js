import { Component } from "react";
import { EmptyCart, Logo, MyBag } from "..";
import {
  Container,
  Group,
  CategoryName,
  Nav,
  Symbol,
  OverLay,
  LockBody,
  DropDown,
} from "./styles/header";
import { connect } from "react-redux";
import { changeCategory } from "../../redux/action/categoryAction";
import headerItems from "../../fixtures/header-items.json";
import { setActive } from "../../redux/action/myBagAction";
import {
  loadCurrencies,
  setCurrentCurrency,
} from "../../redux/action/currenciesAction";
class Header extends Component {
  state = {
    category: "all",
    active: false,
  };
  componentDidMount() {
    this.props.getCurrencies();
  }
  render() {
    return (
      <Container>
        <Nav>
          <Group>
            {headerItems.map((item) => (
              <CategoryName
                key={item.name}
                onClick={() => {
                  this.setState({ category: item.category });
                  this.props.changeCategory(item.category);
                }}
                active={this.state.category === item.category ? 1 : 0}
              >
                {item.name.toUpperCase()}
              </CategoryName>
            ))}
          </Group>
          <Logo />
          <Group gap="22px">
            <Group position="relative" gap="8px">
              <Symbol
                onClick={() => {
                  this.setState((prev) => ({
                    active: !prev.active,
                  }));
                  // this.props.setActive("close");
                }}
              >
                {this.props.currentSymbol}
                <svg
                  style={{ cursor: "pointer" }}
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0.5L4 3.5L7 0.5"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Symbol>
              <DropDown active={this.state.active}>
                {this.props.currencies.map((currency) => (
                  <div
                    onClick={() => this.props.changeCurrency(currency.symbol)}
                    key={currency.symbol}
                  >
                    {currency.symbol}
                    {currency.label}
                  </div>
                ))}
              </DropDown>
            </Group>
            <EmptyCart />
          </Group>
        </Nav>
        <MyBag />
        <OverLay active={this.props.active} />
        {this.props.active ? <LockBody /> : null}
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    active: state.active.active,
    currencies: state.currencies.data,
    currentSymbol: state.currencies.currentSymbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCategory: (category) => dispatch(changeCategory(category)),
    setActive: (pay) => dispatch(setActive(pay)),
    getCurrencies: () => dispatch(loadCurrencies()),
    changeCurrency: (currency) => dispatch(setCurrentCurrency(currency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
