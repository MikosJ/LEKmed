import { MainContent } from "../components/styled/MainContent.ts";
import { useLocation } from "react-router-dom";

export const ReservationPage = () => {
  const location = useLocation();
  if (location.state === null) {
    return (
      <MainContent>
        <div>Brak danych</div>
      </MainContent>
    );
  }
  // export type Doctor = {
  //   firstname: string;
  //   lastname: string;
  //   image?: string;
  //   title: Title;
  //   specialization: Specialization;
  //   availableTimes: AvailableTimes[];
  // };
  //   export type AvailableTimes = {
  //       date: string;
  //       hours: string[];
  //   };
  return (
    <MainContent>
      <ul>
        {location.state.availableTimes.map((it: { hours: string[] }) =>
          it.hours.map((hour) => <li>{hour}</li>),
        )}
      </ul>
      <a>{location?.state.firstname}</a>
      <a>{location?.state.lastname}</a>
      <a>{location?.state.title}</a>
      <img src={location?.state.image} alt={"brak zdjecia"} />
    </MainContent>
  );
};
