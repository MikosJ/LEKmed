import styled from "styled-components";

export const Pierwszy = styled.div``;
export const Drugi = styled.div``;

export const Trzeci = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const PatientContainer = styled.div``;
export const VisitContainer = styled.div``;
export const DoctorContainer = styled.div``;

export const PriceContainer = styled.div``;

export const StateContainer = styled.div``;

export const DateContainer = styled.div``;

export const ReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  min-width: 50%;
  width: fit-content;
  background: #e9fffd;
  border-radius: 10px;
  border: solid rgba(0, 0, 0, 0.49) 5px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.29) 0 0 3rem;
  font-size: 1rem;
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
