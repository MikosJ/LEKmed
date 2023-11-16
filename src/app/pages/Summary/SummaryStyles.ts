import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Key = styled.a`
  text-align: left;
`;
export const Value = styled.a`
  font-weight: bold;
  text-align: right;
`;
export const Summary = styled.div`
  display: grid;
  min-width: 70%;
  column-gap: 1rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  @media (max-width: 1000px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    font-size: 40px;
  }
`;
export const Title = styled.h2`
  text-align: center;
  padding-bottom: 1rem;
`;
export const ReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  background: #e9fffd;
  border-radius: 10px;
  border: solid rgba(0, 0, 0, 0.49) 5px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.29) 0 0 3rem;
  font-size: 1rem;

  @media (max-width: 1000px) {
    min-height: 30vh;
    justify-content: center;
    font-size: 30px;
  }
`;

export const Button = styled.button`
  background: #d92222;
  color: #ffffff;
  border: none;
  padding: 1.5vw 2vh;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background 0.3s ease;
  font-weight: 501;

  &:hover {
    background: rgba(108, 22, 41, 0.5);
  }
`;
