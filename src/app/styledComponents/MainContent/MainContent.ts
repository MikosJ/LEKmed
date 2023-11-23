import styled from "styled-components";

export const MainContent = styled.div<{ $direction?: "row" | "column" }>`
  display: flex;
  color: rgba(0, 97, 129, 1);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 90vh;
  background: linear-gradient(rgba(128, 251, 255, 0.32), rgb(239, 253, 255));
`;
