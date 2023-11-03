import styled from "styled-components";

export const MainContent = styled.div<{ $direction?: "row" | "column" }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 90vh;
  background: linear-gradient(rgba(39, 236, 197, 0.5), rgb(200, 243, 240));
`;
