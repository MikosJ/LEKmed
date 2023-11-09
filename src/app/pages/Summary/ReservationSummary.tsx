import { MainContent } from "../../styledComponents/MainContent/MainContent.ts";
import { Location, useLocation } from "react-router-dom";
import { Reservation } from "../../types/types.ts";
import {
  Button,
  DateContainer,
  DoctorContainer,
  Drugi,
  PatientContainer,
  Pierwszy,
  PriceContainer,
  ReservationContainer,
  StateContainer,
  Trzeci,
  VisitContainer,
} from "./SummaryStyles.ts";
import { useState } from "react";

export const ReservationSummary = () => {
  const location: Location<Reservation> = useLocation();
  if (location.state === null) {
    return <MainContent>Brak danych</MainContent>;
  }
  const status = location.state.status;

  const [visitStatus, setVisitStatus] = useState(status);

  function handleClick() {
    setVisitStatus("Anulowana");
  }

  return (
    <MainContent>
      <ReservationContainer>
        <h2>Twoja wizyta została zarezerwowana!</h2>
        <Trzeci>
          <Pierwszy>
            <PatientContainer>
              <p>Pacjent:</p>
              <p>
                {location.state.patient.firstname}{" "}
                {location.state.patient.lastname}
              </p>
            </PatientContainer>
            <DoctorContainer>
              <p>Doktor:</p>
              <p>
                {location.state.doctor.firstname}{" "}
                {location.state.doctor.lastname}
              </p>
            </DoctorContainer>
          </Pierwszy>
          <Drugi>
            <VisitContainer>
              <p>Rodzaj wizyty:</p>
              <p>{location.state.visit}</p>
            </VisitContainer>
            <DateContainer>
              <p>Data:</p>
              <p>
                {location.state.pickedTime.date.toLocaleDateString()}{" "}
                {location.state.pickedTime.hour}
              </p>
            </DateContainer>
            <PriceContainer>
              <p>Cena:</p>
              <p>
                {location.state.price.value} {location.state.price.currency}
              </p>
            </PriceContainer>
            <StateContainer>
              <p>Status:</p>
              <p>{visitStatus}</p>
            </StateContainer>
          </Drugi>
        </Trzeci>
      </ReservationContainer>
      <Button onClick={handleClick}>Anuluj Wizyte</Button>
    </MainContent>
  );
};
