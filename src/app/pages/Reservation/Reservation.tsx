import {MainContent} from "../../components/styled/MainContent/MainContent.ts";
import {useLocation} from "react-router-dom";
import {AvailableTimes, Visit} from "../../types/types.ts";
import Select from "react-select";
import {SetStateAction, useState} from "react";
import {ReservationContainer} from "./ReservationStyles.ts";
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
    const [selectedOption, setSelectedOption] = useState('control');
    return location.state === null ? (
        <MainContent>
            Nie możesz dokonać rezerwacji bez wcześniejszego wybrania lekarza
        </MainContent>
    ) : (
        // <MainContent>
        //   <select>
        //     {visitOptions.map(([key, value]) => (
        //       <option key={key}>{value}</option>
        //     ))}
        //   </select>
        //   {location.state.availableTimes.map((it: AvailableTimes) =>
        //     it.hours.map((hour) => (
        //       <>
        //         <a>
        //           {it.date
        //             .toLocaleString()
        //             .substring(0, it.date.toLocaleString().indexOf(","))}
        //         </a>
        //         <button>{hour}</button>
        //       </>
        //     )),
        //   )}
        //   <a>{location?.state.firstname}</a>
        //   <a>{location?.state.lastname}</a>
        //   <a>{location?.state.title}</a>
        //   <img src={location?.state.image} alt={"brak zdjecia"} height={"100vh"} />
        // </MainContent>

        // Druga strona, to widok na którym użytkownik wybrał już lekarza, do którego się rejestruje i powinien dostać podgląd z informacją,
        // jakie terminy (dni i godziny) są wolne do umówienia na wizytę. Użytkownik ma możliwość zdefiniowania celu swojej wizyty.
        // Wybór: wizyta kontrolna, konsultacja, choroba, wypisanie recepty, szczepienie. Dostępny cennik usług.
        <MainContent>
            <form>
                <ReservationContainer>
                    <div>Typ wizyty</div>
                    <Select defaultValue={selectedOption} onChange={setSelectedOption} options={visitOptions}/>
                    <div>{location.state.availableTimes.map((at: AvailableTimes) =>
                        <div>
                            {at.date.toLocaleString().substring(0, at.date.toLocaleString().indexOf(','))}
                            {at.hours.map(hour => (<div>{hour}</div>))}
                        </div>)}</div>
                </ReservationContainer>
            </form>
            <div>Koszt: {prices[selectedOption['value']]} PLN </div>

        </MainContent>
    );
};
