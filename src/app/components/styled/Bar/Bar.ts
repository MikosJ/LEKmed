import styled from "styled-components";

export const Bar = styled.div<{ $header?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10vw;
  height: fit-content;
  background: ${(props) =>
    props.$header ? "rgba(255,255,255,0.5)" : "rgba(112, 215, 195, 0.5)"};
  min-height: ${(props) => (props.$header ? "10vh" : "5vh")};
  -webkit-box-shadow: -2px -1px 15px 7px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -3px -2px 30px 14px rgba(0, 0, 0, 0.425);
  box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);
`;
