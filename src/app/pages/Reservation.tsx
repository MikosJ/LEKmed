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
  return (
    <MainContent>
      <a>{location?.state.firstname}</a>
      <a>{location?.state.lastname}</a>
      <a>{location?.state.title}</a>
      <img src={location?.state.image} alt={"brak zdjecia"} />
    </MainContent>
  );
};
