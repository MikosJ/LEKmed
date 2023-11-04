import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {MainContent} from "../../components/styled/MainContent/MainContent.ts";
import {
    Container,
    DateContainer,
    DatesContainer, DateTimeContainer,
    HourButton,
    ReservationContainer,
    Title, VisitPickContainer
} from "./ReservationStyles.ts";
import Select from "react-select";
import {AvailableTimes} from "../../types/types.ts";
import {SingleValue} from "react-select";
import {prices} from "../../hardcoded/prices.ts";

export const ReservationPage = () => {
    const location = useLocation();
    const visitOptions = [
        {value: 'control', label: 'Wizyta kontrolna'},
        {value: 'consultation', label: 'Konsultacja'},
        {value: 'illness', label: 'Choroba'},
        {value: 'prescription', label: 'Wypisanie recepty'},
        {value: 'vaccination', label: 'Szczepienie'},
    ];
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string }>(visitOptions[0]); // Initialize with the first option
    const handleSelectChange = (
        newValue: SingleValue<{ value: string; label: string }>
    ) => {
        if (newValue) {
            setSelectedOption(newValue);
        }
    };
    const [pickedButton, setPickedButton] = useState<string>("");

    const handleButtonClick = (date: Date, hour: string) => {
        if (pickedButton === `${date}-${hour}`) {
            setPickedButton("");
        } else {
            setPickedButton(`${date}-${hour}`);
        }
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
                            options={visitOptions}/>
                    </VisitPickContainer>
                    <DatesContainer>
                        {location.state.availableTimes.map((at: AvailableTimes) => (
                            <DateTimeContainer>
                            <Title>{at.date.toLocaleString().substring(0, at.date.toLocaleString().indexOf(','))}</Title>
                            <DateContainer>

                                {at.hours.map((hour) => (
                                    <HourButton
                                        $picked={pickedButton === `${at.date}-${hour}`}
                                        key={`${at.date}-${hour}`}
                                        onClick={() => handleButtonClick(at.date, hour)}
                                        type={"button"}
                                    >{hour}
                                    </HourButton>
                                ))}
                            </DateContainer>
                            </DateTimeContainer>
                        ))}
                    </DatesContainer>
                </Container>

            </form>
            <Title>Koszt: {prices[selectedOption.value]} PLN</Title>
            </ReservationContainer>
        </MainContent>
    );
};
