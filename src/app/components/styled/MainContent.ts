import styled from "styled-components";

export const MainContent = styled.div<{ $direction?: "row" | "column" }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  gap: 1rem;
  background: #27ecc5;
  background: linear-gradient(45deg, #27ecc5 0%,  #0da684 30%, #0da684 55%, #27ecc5 100%);
`;
