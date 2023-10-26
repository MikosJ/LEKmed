import styled from "styled-components";

export const Bar = styled.div<{ $header?: boolean }>`
  background-color: ${(props) => (props.$header ? "#5ee8c4" : "black")};
  min-height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
