import styled from "styled-components";

export const Bar = styled.div<{ $header?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20vw;
  height: fit-content;
  min-height: ${(props) => (props.$header ? "10rem":"5rem")};
  background-color: ${(props) => (props.$header ? "#27ecc5" : "#0da684")};
  background-image: ${(props) => (props.$header ? "linear-gradient(#0da684,#27ecc5)":"linear-gradient(#27ecc5,#0da684)")};
`;
