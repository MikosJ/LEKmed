import styled from "styled-components";

export const ReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3rem;
  height: fit-content;
  background: #e9fffd;
  border-radius: 10px;
  border: solid rgba(255, 255, 255, 0.49) 5px;
  width: 80%;
  max-height: 80vh;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.29) 0 0 3rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3rem;
`;
export const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;
  padding: 0.5rem;
`;
export const VisitPickContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
export const DatesContainer = styled.div`
  display: flow;
  overflow: auto;
  align-items: center;
  max-height: 50vh;
`;
export const DateContainer = styled.div`
  display: flow;
  align-items: center;
  max-width: 80rem;
`;

export const HourButton = styled.button<{ $picked: boolean }>`
  background: ${(props) => (props.$picked ? "rgba(195,255,191,0.6)" : "azure")};
  color: ${(props) => (props.$picked ? "black" : "black")};
  padding: 10px;
  margin: 3px;
  cursor: pointer;
  outline: none;
  transition:
    background 0.3s,
    color 0.3s;
  border-radius: 10px;
  border: rgba(13, 166, 132, 0.5) solid 3px;
`;

export const Title = styled.h3`
  font-weight: bold;
  color: rgba(0, 0, 0, 0.81);
`;
