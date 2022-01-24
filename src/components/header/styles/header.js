import styled, { createGlobalStyle } from "styled-components/macro";

export const Container = styled.header`
  position: relative;
  margin-bottom: 50px;
`;

export const Nav = styled.nav`
  width: 94%;
  margin: auto;
  padding-top: 15px;
  min-height: 2vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: ${({ gap }) => gap};
  flex: ${({ flex }) => flex};
  position: ${({ position }) => position};
`;

export const CategoryName = styled.h4`
  padding: 0 24px 0 24px;
  cursor: pointer;
  padding-top: 10px;
  font-size: 16px;
  align-self: stretch;
  font-weight: 400;
  color: ${({ active }) => (active ? "#5ECE7B" : "#1d1f22")};
  border-bottom: 1px solid
    ${({ active }) => (active ? "#5ECE7B" : "transparent")};
`;
export const DropDown = styled.div`
  position: absolute;
  top: 100%;
  right: -100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? "all" : "none")};
  transform: ${({ active }) =>
    active ? "translateY(0%)" : "translateY(-10%)"};
  transition: all 0.5s;
  width: 114px;
  padding: 10px 0;
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

export const LockBody = createGlobalStyle`
body{
    overflow: hidden;
}
`;
