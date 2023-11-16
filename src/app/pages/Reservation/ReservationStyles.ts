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
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.29) 0 0 3rem;
`;
export const MobileReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  height: 70vh;
  overflow: auto;
  background: #e9fffd;
  border-radius: 10px;
  border: solid rgba(255, 255, 255, 0.49) 5px;
  width: 80%;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.29) 0 0 3rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3rem;
`;
export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.5rem;
  padding: 0.5rem;
`;
export const MobileDateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
`;
export const VisitPickContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
export const MobileVisitPickContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  font-size: 25px;
`;
export const DatesContainer = styled.div`
  display: flow;
  overflow: auto;
  align-items: center;
  max-height: 50vh;
`;
export const MobileDatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
`;
export const DateContainer = styled.div`
  display: flow;
  align-items: center;
  max-width: 80rem;
`;
export const MobileDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const MobileHourButton = styled.button<{ $picked: boolean }>`
  background: ${(props) => (props.$picked ? "rgba(33,198,255,0.6)" : "azure")};
  padding: 20px;
  font-size: 50px;
  margin: 15px;
  cursor: pointer;
  outline: none;
  transition:
    background 0.3s,
    color 0.3s;
  border-radius: 10px;
  border: rgba(66, 189, 162, 0.5) solid 3px;
  font-weight: bold;
  color: rgba(0, 143, 108, 0.5);
`;
export const HourButton = styled.button<{ $picked: boolean }>`
  background: ${(props) => (props.$picked ? "rgba(33,198,255,0.6)" : "azure")};
  padding: 10px;
  margin: 3px;
  cursor: pointer;
  outline: none;
  transition:
    background 0.3s,
    color 0.3s;
  border-radius: 10px;
  border: rgba(66, 189, 162, 0.5) solid 3px;
  font-weight: bold;
  color: rgba(0, 143, 108, 0.5);
  font-size: 20px;
`;

export const Title = styled.h2`
  font-weight: bold;
  color: rgba(0, 0, 0, 0.81);
`;
export const MobileTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.81);
  font-size: 2rem;
`;
export const MobileButton = styled.button`
  background: linear-gradient(
    rgba(122, 237, 255, 0.5),
    rgba(185, 248, 255, 0.5)
  );
  color: #005979;
  border: none;
  padding: 1.5vw 2vh;
  border-radius: 8px;
  cursor: pointer;
  font-size: 3rem;
  transition: background 0.3s ease;
  font-weight: 501;

  &:hover {
    background: linear-gradient(
      rgba(0, 67, 218, 0.5),
      rgba(113, 221, 255, 0.63)
    );
  }
`;
