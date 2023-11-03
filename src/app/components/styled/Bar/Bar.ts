import styled from "styled-components";

export const Bar = styled.div<{ $header?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10vw;
  height: fit-content;
  min-height: ${(props) => (props.$header ? "10vh":"5vh")};
`;
