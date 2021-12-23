import styled, { createGlobalStyle } from "styled-components/macro";

export const Container = styled.header`
  min-height: 10vh;
  padding: 16px 0;
  position: relative;
`;

export const Nav = styled.nav`
  width: 94%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap};
  flex: ${({ flex }) => flex};
`;

export const CategoryName = styled.h4`
  padding: 0 24px 0 24px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: ${({ active }) => (active ? "#5ECE7B" : "#1d1f22")};
  border-bottom: 1px solid
    ${({ active }) => (active ? "#5ECE7B" : "transparent")};
`;

export const Symbol = styled.span`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
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
