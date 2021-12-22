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
} from "./styles/header";
export default class Header extends Component {
  state = {
    category: "all",
    active: false,
  };
  items = [
    { name: "All", category: "all" },
    { name: "Clothes", category: "clothes" },
    { name: "Tech", category: "tech" },
  ];

  render() {
    return (
      <Container>
        <Nav>
          <Group flex="0.5">
            {this.items.map((item) => (
              <CategoryName
                key={item.name}
                onClick={() => this.setState({ category: item.category })}
                active={this.state.category === item.category ? 1 : 0}
              >
                {item.name}
              </CategoryName>
            ))}
          </Group>
          <Logo />
          <Group flex="0.5" gap="22px">
            <Group gap="8px">
              <Symbol>$</Symbol>
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
            </Group>
            <EmptyCart
              onClick={() =>
                this.setState((prev) => ({
                  active: !prev.active,
                }))
              }
            />
          </Group>
        </Nav>
        <MyBag active={this.state.active} />
        <OverLay active={this.state.active} />
        {this.state.active ? <LockBody /> : null}
      </Container>
    );
  }
}
