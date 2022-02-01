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
  CurrencyGroup,
  DownArrow,
  CurrencyText,
} from "./styles/header";
import { connect } from "react-redux";
import { changeCategory } from "../../redux/action/categoryAction";
import headerItems from "../../fixtures/header-items.json";
import { setActive, setDropdown } from "../../redux/action/myBagAction";
import {
  loadCurrencies,
  setCurrentCurrency,
} from "../../redux/action/currenciesAction";

class Header extends Component {
  state = {
    category: "all",
  };

  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    return (
      <Container>
        <Nav>
          <Group alignSelf="stretch">
            {headerItems.map((item) => (
              <CategoryName
                to="/"
                onClick={() => {
                  this.setState({ category: item.category });
                  this.props.changeCategory(item.category);
                }}
                active={this.state.category === item.category ? 1 : 0}
                key={item.name}
              >
                {item.name.toUpperCase()}
              </CategoryName>
            ))}
          </Group>
          <Logo />
          <Group paddingTop="10px" gap="22px">
            <Group position="relative" gap="8px">
              <Symbol onClick={() => this.props.setDropdown()}>
                <CurrencyText>{this.props.currentSymbol}</CurrencyText>
                <DownArrow />
              </Symbol>
              <DropDown active={this.props.activeDrop}>
                {this.props.currencies.map((currency) => (
                  <CurrencyGroup
                    onClick={(e) => {
                      this.props.changeCurrency(currency.symbol);
                      this.props.setDropdown("close");
                    }}
                    key={currency.symbol}
                  >
                    <CurrencyText>{currency.symbol}</CurrencyText>
                    <CurrencyText>{currency.label}</CurrencyText>
                  </CurrencyGroup>
                ))}
              </DropDown>
            </Group>
            <EmptyCart />
          </Group>
        </Nav>
        <MyBag />
        <OverLay
          onClick={() => {
            this.props.setActive();
            this.props.setDropdown("close");
          }}
          active={this.props.active}
        />
        {this.props.active ? <LockBody /> : null}
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    active: state.active.active,
    activeDrop: state.active.activeDrop,
    currencies: state.currencies.data,
    currentSymbol: state.currencies.currentSymbol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCategory: (category) => dispatch(changeCategory(category)),
    setActive: () => dispatch(setActive()),
    getCurrencies: () => dispatch(loadCurrencies()),
    changeCurrency: (currency) => dispatch(setCurrentCurrency(currency)),
    setDropdown: (close) => dispatch(setDropdown(close)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
