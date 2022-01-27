import styled from "styled-components/macro";

export const Container = styled.div`
  margin-top: 80px;
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 59px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  margin: auto;
`;

export const Product = styled.div`
  display: flex;
  border-top: 1px solid #e5e5e5;
  padding-top: 20px;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 20px;
`;

export const ProductName = styled.h4`
  font-weight: 600;
  font-size: 30px;
`;

export const ProductDesc = styled(ProductName)`
  font-weight: 400;
  max-width: 660px;
`;

export const ProductPrice = styled.h4`
  font-size: 24px;
  font-weight: 700;
`;

export const SizeBtn = styled.button`
  width: 63px;
  height: 45px;
  background: ${({ active }) => (active ? "#1d1f22" : "transparent")};
  border: 1px solid #1d1f22;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? "white" : "#1d1f22")};
  cursor: pointer;
`;

export const DecrementBtn = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid #1d1f22;
  font-size: 20px;
  cursor: pointer;
`;

export const IncrementBtn = styled(DecrementBtn)``;

export const Image = styled.img`
  background: url(${({ src }) => src}) center / contain no-repeat;
  width: 141px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
`;

export const DetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ImageHolder = styled.div`
  display: flex;
  gap: 12px;
  height: 220px;
`;

export const AttriBox = styled.div`
  background-color: ${({ active }) => (active ? "black" : "transparent")};
  color: ${({ active }) => (active ? "white" : "black")};
  width: 63px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
