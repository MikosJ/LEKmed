import { MainContent } from "../components/styled/MainContent.ts";
import { useLocation } from "react-router-dom";

export const ReservationPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <MainContent>
      <h1>Rezerwacja</h1>
      <a>{location.state.firstname}</a>
      <a>{location.state.lastname}</a>
      <a>{location.state.title}</a>
      <img src={location.state.image} alt={"brak zdjecia"} />
      <a>test</a>
    </MainContent>
  );
};
