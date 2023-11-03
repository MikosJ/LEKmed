import { MainContent } from "../components/styled/MainContent.ts";
import { useLocation } from "react-router-dom";
import { AvailableTimes } from "../types/types.ts";

export const ReservationPage = () => {
  const location = useLocation();
  if (location.state === null) {
    return (
      <MainContent>
        <div>Brak danych</div>
      </MainContent>
    );
  }
  return (
    <MainContent>
      {location.state.availableTimes.map((it: AvailableTimes) =>
        it.hours.map((hour) => <button>{hour}</button>),
      )}
      <a>{location?.state.firstname}</a>
      <a>{location?.state.lastname}</a>
      <a>{location?.state.title}</a>
      <img src={location?.state.image} alt={"brak zdjecia"} />
    </MainContent>
  );
};
