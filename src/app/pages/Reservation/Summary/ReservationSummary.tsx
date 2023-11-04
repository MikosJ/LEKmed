import { MainContent } from "../../../styledComponents/MainContent/MainContent.ts";
import { Location, useLocation } from "react-router-dom";
import { Reservation } from "../../../types/types.ts";

export const ReservationSummary = () => {
  const location: Location<Reservation> = useLocation();

  return location.state === null ? (
    <MainContent>Brak danych</MainContent>
  ) : (
    <MainContent>
      <div>{location.state.patient.firstname}</div>
      <div>{location.state.patient.lastname}</div>
      <div>umowiony do</div>
      <div>{location.state.doctor.firstname}</div>
      <div>{location.state.doctor.lastname}</div>
      <div>status rezerwacji:</div>
      <div>{location.state.status}</div>
    </MainContent>
  );
};
