import styled from "styled-components/macro";
// import { Link } from "react-router-dom";
export const Image = styled.div`
  height: 330px;
  background: url(${({ src }) => src}) center 40% / cover no-repeat;
  position: relative;
`;

export const CartIcon = styled.button`
  background-color: #5ece7b;
  width: 52px;
  height: 52px;
  position: absolute;
  bottom: 10.5%;
  right: 1%;
  transform: translateY(-50%) translateX(-50%);
  transition: all 0.3s;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000000;
`;

export const Card = styled.div`
  flex: 0 1 calc(93.9% / 3);
  display: flex;
  position: relative;
  gap: 24px;
  flex-direction: column;
  padding: 16px;
  transition: all 0.3s;
  background-color: #ffffff;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:hover > ${CartIcon} {
    opacity: 1;
  }
  text-decoration: none;
  /* opacity: ${({ active }) => (active ? 1 : 0.8)};
  pointer-events: ${({ active }) => (active ? "all" : "none")}; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h5`
  font-size: 18px;
  font-weight: 300;
  font-size: normal;
  color: #1d1f22;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  color: #1d1f22;
`;

export const OutOfStock = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 28px;
  color: #8d8f9a;
  z-index: 10000;
`;
