import { MainContent } from "../components/styled/MainContent/MainContent.ts";
import { useLocation } from "react-router-dom";
import { AvailableTimes, Visit } from "../types/types.ts";

export const ReservationPage = () => {
  const location = useLocation();
  const visitOptions = Object.entries(Visit);
  return location.state === null ? (
    <MainContent>
      Nie możesz dokonać rezerwacji bez wcześniejszego wybrania lekarza
    </MainContent>
  ) : (
    <MainContent>
      <select>
        {visitOptions.map(([key, value]) => (
          <option key={key}>{value}</option>
        ))}
      </select>
      {location.state.availableTimes.map((it: AvailableTimes) =>
        it.hours.map((hour) => (
          <>
            <a>
              {it.date
                .toLocaleString()
                .substring(0, it.date.toLocaleString().indexOf(","))}
            </a>
            <button>{hour}</button>
          </>
        )),
      )}
      <a>{location?.state.firstname}</a>
      <a>{location?.state.lastname}</a>
      <a>{location?.state.title}</a>
      <img src={location?.state.image} alt={"brak zdjecia"} height={"100vh"} />
    </MainContent>
  );
};
