import styled from "styled-components/macro";

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

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
`;
