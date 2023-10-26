import styled from "styled-components";

export const Bar = styled.div<{ $header?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: ${(props) => (props.$header ? "15vh" : "20vh")};
  position: ${(props) => (props.$header ? "relative" : "absolute")};
  bottom: ${(props) => (props.$header ? "none" : "0")};
  background-color: ${(props) => (props.$header ? "#5ee8c4" : "#08775c")};
`;
