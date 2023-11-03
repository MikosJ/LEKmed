import styled from "styled-components";

export const CardContainer = styled.div<{ $mobile?: boolean }>`
  display: flex;
  flex-direction: ${(props) => props.$mobile ? "row" : "column"};
  gap: 1rem;
  max-width: 80%;
  padding: 2%;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #000000;
  max-width: 50%;
  padding: 2rem 0;
  
`
export const Image = styled.img`
  width: 100px;
  
`
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
export const BigText = styled.h4`
    font-size: 1.5rem;
`
export const SmallText = styled.p`
    font-size: 1rem;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  background: linear-gradient(
    rgba(39, 236, 197, 0.5),
    rgba(112, 215, 195, 0.5)
  );
  color: white;
  border: none;
  padding: 1.5vw 2vh;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 1rem;

  &:hover {
    background: linear-gradient(
      rgba(112, 215, 195, 0.5),
      rgba(39, 236, 197, 0.5)
    );
  }
`;
