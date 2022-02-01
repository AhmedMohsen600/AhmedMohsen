import styled, { createGlobalStyle } from "styled-components/macro";
import { Link } from "react-router-dom";
export const Container = styled.header`
  position: relative;
  margin-bottom: 50px;
`;

export const Nav = styled.nav`
  width: 94%;
  margin: 0 auto;
  padding-top: 10px;
  min-height: 8.7vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${({ alignSelf }) => alignSelf};
  gap: ${({ gap }) => gap};
  flex: ${({ flex }) => flex};
  position: ${({ position }) => position};
  padding-top: ${({ paddingTop }) => paddingTop};
`;

export const CategoryName = styled(Link)`
  cursor: pointer;
  padding: 0 24px;
  padding-top: 9px;
  font-size: 16px;
  font-weight: 400;
  align-self: stretch;
  color: ${({ active }) => (active ? "#5ECE7B" : "#1d1f22")};
  border-bottom: 1px solid
    ${({ active }) => (active ? "#5ECE7B" : "transparent")};
  text-decoration: none;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 160%;
  right: -100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 11px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? "all" : "none")};
  transform: ${({ active }) =>
    active ? "translateY(0%)" : "translateY(-10%)"};
  transition: all 0.5s;
  width: 114px;
  background: #ffffff;
  z-index: 5000;
  box-shadow: 0px 4px 35px 0px #a8acb030;
  z-index: 50000000;
`;

export const Symbol = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
`;

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin-top: 10vh;
  background: rgba(57, 55, 72, 0.22);
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: all 0.5s;
  pointer-events: ${({ active }) => (active ? "all" : "none")};
  z-index: 999;
`;

export const CurrencyGroup = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 10px 0;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const CurrencyText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const LockBody = createGlobalStyle`
body{
    overflow: hidden;
}
`;

export const DownArrow = styled.div`
  background: url("/images/down-arrow.svg") center / cover no-repeat;
  width: 8px;
  height: 4px;
  cursor: pointer;
`;
