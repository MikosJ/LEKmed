import styled from "styled-components";

export const MainContent = styled.div<{ $direction?: "row" | "column" }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  gap: 1rem;
  background: #27ecc5;
  background: linear-gradient(45deg, rgba(39, 236, 197, 0.5) 0%, rgba(13, 166, 132, 0.5) 30%, rgba(13, 166, 132, 0.5) 55%, rgba(39, 236, 197, 0.5) 100%);
`;
