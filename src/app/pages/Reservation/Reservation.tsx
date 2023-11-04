import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {MainContent} from "../../components/styled/MainContent/MainContent.ts";
import {ReservationContainer} from "./ReservationStyles.ts";
import Select from "react-select";
import {AvailableTimes} from "../../types/types.ts";
import {SingleValue} from "react-select";
import {prices} from "../../hardcoded/prices.ts";

export const ReservationPage = () => {
    const location = useLocation();
    const visitOptions = [
        { value: 'control', label: 'Wizyta kontrolna' },
        { value: 'consultation', label: 'Konsultacja' },
        { value: 'illness', label: 'Choroba' },
        { value: 'prescription', label: 'Wypisanie recepty' },
        { value: 'vaccination', label: 'Szczepienie' },
    ];
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string }>(visitOptions[0]); // Initialize with the first option
    const handleSelectChange = (
        newValue: SingleValue<{ value: string; label: string }>
    ) => {
        if (newValue) {
            setSelectedOption(newValue);
        }
    };

    return location.state === null ? (
        <MainContent>
            Nie możesz dokonać rezerwacji bez wcześniejszego wybrania lekarza
        </MainContent>
    ) : (
        <MainContent>
            <form>
                <ReservationContainer>
                    <div>Typ wizyty</div>
                    <Select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        options={visitOptions}/>
                    <div>
                        {location.state.availableTimes.map((at: AvailableTimes) => (
                            <div>
                                {at.date.toLocaleString().substring(0, at.date.toLocaleString().indexOf(','))}
                                {at.hours.map((hour:string) => (
                                    <div key={hour}>{hour}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                </ReservationContainer>
            </form>
            <div>Koszt: {prices[selectedOption.value]} PLN</div>
        </MainContent>
    );
};
