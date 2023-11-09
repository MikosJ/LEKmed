import { useState } from "react";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { MainContent } from "../../styledComponents/MainContent/MainContent.ts";
import {
  Container,
  DateContainer,
  DatesContainer,
  DateTimeContainer,
  HourButton,
  ReservationContainer,
  Title,
  VisitPickContainer,
} from "./ReservationStyles.ts";
import Select, { SingleValue } from "react-select";
import {
  AvailableTimes,
  Doctor,
  Patient,
  PickedTime,
  Reservation,
  Visit,
} from "../../types/types.ts";
import { prices } from "../../hardcoded/prices.ts";
import { Button } from "../Home/Card/CardStyles.ts";

export const ReservationPage = () => {
  const navigate = useNavigate();
  const location: Location<Doctor> = useLocation();
  const visitOptions = [
    { value: Visit.control, label: "Wizyta kontrolna" },
    { value: Visit.consultation, label: "Konsultacja" },
    { value: Visit.illness, label: "Choroba" },
    { value: Visit.prescription, label: "Wypisanie recepty" },
    { value: Visit.vaccination, label: "Szczepienie" },
  ];
  const [selectedOption, setSelectedOption] = useState<{
    value: Visit;
    label: string;
  }>(visitOptions[0]);
  const handleSelectChange = (
    newValue: SingleValue<{ value: Visit; label: string }>,
  ) => {
    if (newValue) {
      setSelectedOption(newValue);
    }
  };
  const [pickedTime, setPickedTime] = useState<PickedTime>();

  const handleButtonClick = (date: Date, hour: string) => {
    if (pickedTime?.hour === hour && pickedTime.date === date) {
      setPickedTime({ hour, date });
    } else {
      setPickedTime({ hour, date });
    }
  };

  const handleReservationButton = () => {
    const patient: Patient = {
      firstname: "Jan",
      lastname: "Spych",
      dateOfBirth: new Date(1999, 12, 23),
      pesel: "999111111",
    };
    const reservation: Reservation = {
      doctor: location.state,
      patient: patient,
      visit: selectedOption.value,
      pickedTime: pickedTime ?? { date: new Date(2023, 12, 12), hour: "" },
      price: { value: 100, currency: "PLN" },
      status: "Zarezerwowana",
    };
    navigate("/rezerwacja/podsumowanie", { state: reservation });
  };

  return location.state === null ? (
    <MainContent>
      Nie możesz dokonać rezerwacji bez wcześniejszego wybrania lekarza
    </MainContent>
  ) : (
    <MainContent>
      <ReservationContainer>
        <form>
          <Container>
            <VisitPickContainer>
              <Title>Typ wizyty</Title>
              <Select
                value={selectedOption}
                onChange={handleSelectChange}
                options={visitOptions}
              />
            </VisitPickContainer>
            <DatesContainer>
              {location.state.availableTimes.map((at: AvailableTimes) => (
                <DateTimeContainer>
                  <Title>
                    {at.date
                      .toLocaleString()
                      .substring(0, at.date.toLocaleString().indexOf(","))}
                  </Title>
                  <DateContainer>
                    {at.hours.map((hour) => (
                      <HourButton
                        $picked={
                          pickedTime?.date === at.date &&
                          pickedTime.hour === hour
                        }
                        key={`${at.date}-${hour}`}
                        onClick={() => handleButtonClick(at.date, hour)}
                        type={"button"}
                      >
                        {hour}
                      </HourButton>
                    ))}
                  </DateContainer>
                </DateTimeContainer>
              ))}
            </DatesContainer>
          </Container>
        </form>
        <Title>Koszt: {prices[selectedOption.value]} PLN</Title>
        {pickedTime && (
          <Button onClick={handleReservationButton}>Zarezerwuj</Button>
        )}
      </ReservationContainer>
    </MainContent>
  );
};
