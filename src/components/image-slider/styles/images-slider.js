import styled from "styled-components/macro";

export const SliderHolder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageHolder = styled.div`
  transition: all 0.6s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: ${({ active }) => (active ? "scale(1)" : "scale(1.08)")};
`;

export const RightArrow = styled.div`
  width: 8px;
  height: 14px;
  background-color: black;
  background: url("/images/right-arrow.svg") center / contain no-repeat;
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 10000;
  background-color: black;
  cursor: pointer;
  user-select: none;
`;

export const LeftArrow = styled(RightArrow)`
  left: 10px;
  background: url("/images/left-arrow.svg") center / contain no-repeat;
  background-color: black;
`;
