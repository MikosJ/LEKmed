import styled from "styled-components";

export const Bar = styled.div<{ $header?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10vw;
  height: fit-content;
  background: ${(props) =>
    props.$header ? "rgba(39, 236, 197, 0.5)" : "rgba(112, 215, 195, 0.5)"};
  min-height: ${(props) => (props.$header ? "10vh" : "5vh")};
`;
