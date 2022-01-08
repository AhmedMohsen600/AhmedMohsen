import styled from "styled-components/macro";

export const Container = styled.section`
  width: 100%;
  margin: 70px 0;
`;

export const Inner = styled.div`
  width: 94%;
  display: flex;
  margin: auto;
`;

export const Product = styled.div`
  display: flex;
  gap: 40px;
  width: 92%;
  @media (min-width: 2000px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const BigImage = styled.div`
  flex: 1;
  max-height: 600px;
  background: url(${({ src }) => src}) center / cover no-repeat;
`;

export const SmallImage = styled.div`
  width: 79px;
  height: 80px;
  background: url(${({ src }) => src}) center / cover no-repeat;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const DetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 25%;
`;

export const SizeText = styled.h5`
  font: normal 700 18px/18px Roboto Condensed, sans-serif;
`;

export const SmallImagesGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ContentHolder = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
`;

export const PriceText = styled(SizeText)``;

export const AddToCartBtn = styled.button`
  background-color: #5ece7b;
  color: white;
  padding: 16px 32px 16px 32px;
  border: 0;
  cursor: pointer;
`;

export const TextDesc = styled.div`
  font: normal 400 16px/25.59px Roboto, sans-serif;
`;
