import styled from "styled-components";

export const First = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Second = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Third = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Block = styled.div`
  display: flex;
  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
  }
  justify-content: space-between;
  gap: 1rem;
`;
export const Key = styled.a`
  text-align: left;
  @media (max-width: 1000px) {
    text-align: left;
  }
`;
export const Value = styled.a`
  font-weight: bold;
  text-align: right;

  @media (max-width: 1000px) {
    text-align: left;
  }
`;
export const Summary = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media (max-width: 1000px) {
    flex-direction: column;
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
  width: 70vw;
  height: 50vh;
  background: #e9fffd;
  border-radius: 10px;
  border: solid rgba(0, 0, 0, 0.49) 5px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.29) 0 0 3rem;
  font-size: 1.5rem;

  @media (max-width: 1000px) {
    width: 80vw;
    height: 50vh;
    font-size: 2.5rem;
  }
`;

export const Button = styled.button<{ reservation?: boolean }>`
  background: ${(props) => (props.reservation ? "red" : "green")};
  color: #ffffff;
  border: none;
  padding: 1.5vw 2vh;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background 0.3s ease;
`;
