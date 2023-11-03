import styled from "styled-components";

export const CardContainer = styled.div<{ $mobile?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$mobile ? "row" : "column")};
  gap: 1rem;
  max-width: 80%;
  padding: 2%;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #000000;
  max-width: 35%;
`;
export const Image = styled.img`
  width: 150px;
  border: 3px solid rgba(123, 221, 255, 0.5);
  border-radius: 5px;
  margin: 10px;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
export const BigText = styled.h4`
  font-size: 1.5rem;
`;
export const SmallText = styled.p`
  font-size: 1rem;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: linear-gradient(
    rgba(39, 236, 197, 0.5),
    rgba(112, 215, 195, 0.5)
  );
  color: white;
  border: none;
  padding: 1.5vw 2vh;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(
      rgba(112, 215, 195, 0.5),
      rgba(39, 236, 197, 0.5)
    );
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  height: fit-content;
  padding: 1rem 1rem;
  width: 80vw;
  background: rgb(255, 255, 255);
  border: 3px solid rgba(123, 221, 255, 0.5);
`;

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3rem;
  align-items: center;
  max-width: 15%;
  padding: 0 1rem;
`;
export const AvailableDates = styled.p<{ $isFree: boolean }>`
  color: ${(props) => (props.$isFree ? "green" : "red")};
  font-weight: bold;
  display: flex;
  max-width: 90%;
  text-align: center;
`;
