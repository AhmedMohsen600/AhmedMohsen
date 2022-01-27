import styled from "styled-components/macro";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  z-index: 100000;
  gap: 42px;
  transition: all 0.5s ease;
  position: absolute;
  background-color: white;
  top: 99.3%;
  right: 2.8%;
  opacity: ${({ active }) => (active ? "1" : "0")};
  transform: ${({ active }) => (active ? "scale(1)" : "scale(0.4)")};
  pointer-events: ${({ active }) => (active ? "all" : "none")};
  transform: ${({ active }) =>
    active ? "translateY(0%)" : "translateY(-10%)"};
  overflow-y: scroll;
  max-height: 85vh;
`;

export const NumberOfProducts = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  color: #1d1f22;
`;

export const ProductsGroup = styled.div`
  gap: 41px;
  display: flex;
  flex-direction: column;
`;

export const Product = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  align-items: center;
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductName = styled.h4`
  font-size: 16px;
  font-weight: 300;
  max-width: 120px;
  font-style: normal;
  color: #1d1f22;
  line-height: 25.6px;
`;

export const ProductPrice = styled.h5`
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
`;

export const ProductSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid #1d1f22;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "black" : "white")};
  font-size: 12px;
  color: ${({ active }) => (active ? "white" : "black")};
`;
export const ColorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid #1d1f22;
  cursor: pointer;
  background-color: ${({ bgColor }) => bgColor};
`;
export const ProductCount = styled.div`
  display: flex;
  gap: 8px;
`;

export const ProductImage = styled.div`
  background: url(${({ src }) => src}) center top / contain no-repeat;
  width: 105px;
  height: 137px;
`;
export const ItemCount = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
`;

export const Group = styled.div`
  display: flex;
  height: ${({ height }) => height};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  width: ${({ width }) => width};
`;

export const Decrement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid #1d1f22;
  cursor: pointer;
`;

export const Increment = styled(Decrement)``;

export const CheckOut = styled.button`
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5ece7b;
  font-size: 14px;
  font-weight: 400;
  border: 0;
  color: white;
  cursor: pointer;
`;

export const ViewBag = styled(Link)`
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  text-decoration: none;
`;

export const TotalPrice = styled.h5`
  font-size: 16px;
  font-weight: 500;
`;
