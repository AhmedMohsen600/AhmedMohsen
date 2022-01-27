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
  width: 15px;
  height: 15px;
  background: url("/images/right-arrow.svg") center / cover no-repeat;
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 10000;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  background-color: gray;
`;

export const LeftArrow = styled(RightArrow)`
  left: 10px;
  background: url("/images/left-arrow.svg") center / contain no-repeat;
  background-color: gray;
`;
