import { MainContent } from "../../styledComponents/MainContent/MainContent.ts";
import { Location, useLocation } from "react-router-dom";
import { Reservation } from "../../types/types.ts";
import {
  Second,
  First,
  Block,
  Button,
  Key,
  ReservationContainer,
  Summary,
  Title,
  Value,
} from "./SummaryStyles.ts";
import { useState } from "react";

export const ReservationSummary = () => {
  const location: Location<Reservation> = useLocation();
  if (location.state === null) {
    return <MainContent>Brak danych</MainContent>;
  }
  const status = location.state.status;

  const [visitStatus, setVisitStatus] = useState(status);

  const [title, setTtile] = useState("Twoja wizyta została zarezerwowana!");

  const [button, setButton] = useState("Anuluj wizyte");

  function handleClick() {
    if (button === "Anuluj wizyte") {
      setVisitStatus("Anulowana");
      setTtile("Twoja wizyta została anulowana");
      setButton("Zarezerwuj");
      return;
    }
    setVisitStatus("Zarezerwowana");
    setTtile("Twoja wizyta została zarezerwowana!");
    setButton("Anuluj wizyte");
  }

  return (
    <MainContent>
      <ReservationContainer>
        <Title>{title}</Title>
        <Summary>
          <First>
            <Block>
              <Key>Pacjent: </Key>
              <Value>
                {location.state.patient.firstname}{" "}
                {location.state.patient.lastname}
              </Value>
            </Block>
            <Block>
              <Key>Doktor: </Key>
              <Value>
                {location.state.doctor.firstname}{" "}
                {location.state.doctor.lastname}
              </Value>
            </Block>
          </First>
          <Second>
            <Block>
              <Key>Rodzaj wizyty: </Key>
              <Value>{location.state.visit}</Value>
            </Block>
            <Block>
              <Key>Data: </Key>
              <Value>
                {location.state.pickedTime.date.toLocaleDateString()}{" "}
                {location.state.pickedTime.hour}
              </Value>
            </Block>
            <Block>
              <Key>Cena: </Key>
              <Value>
                {location.state.price.value} {location.state.price.currency}
              </Value>
            </Block>
            <Block>
              <Key>Status: </Key>
              <Value>{visitStatus}</Value>
            </Block>
          </Second>
        </Summary>
      </ReservationContainer>
      <Button
        reservation={visitStatus === "Zarezerwowana"}
        onClick={handleClick}
      >
        {button}
      </Button>
    </MainContent>
  );
};
