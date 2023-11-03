import { MainContent } from "../components/styled/MainContent.ts";
import { useLocation } from "react-router-dom";
import { AvailableTimes, Visit } from "../types/types.ts";

export const ReservationPage = () => {
  const location = useLocation();
  const visitOptions = Object.entries(Visit);
  if (location.state === null) {
    return (
      <MainContent>
        <div>Brak danych</div>
      </MainContent>
    );
  }

  return (
    <>
      <MainContent>
        <select>
          {visitOptions.map(([key, value]) => (
            <option key={key}>{value}</option>
          ))}
        </select>
        {location.state.availableTimes.map((it: AvailableTimes) =>
          it.hours.map((hour) => (
            <>
              <a>{it.date}</a>
              <button>{hour}</button>
            </>
          )),
        )}
        <a>{location?.state.firstname}</a>
        <a>{location?.state.lastname}</a>
        <a>{location?.state.title}</a>
        <img src={location?.state.image} alt={"brak zdjecia"} />
      </MainContent>
    </>
  );
};
