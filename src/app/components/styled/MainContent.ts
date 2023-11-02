import styled from "styled-components";

export const MainContent = styled.div<{ $direction?: "row" | "column" }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
