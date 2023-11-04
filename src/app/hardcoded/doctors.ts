import {Doctor} from "../types/types.ts";

export const doctors: Doctor[] = [
    {
        firstname: "Mariusz",
        lastname: "Kowal",
        image: "../images/1.jpg",
        title: "Dr.",
        specialization: "Lekarz rodzinny",
        availableTimes: [
            {
                date: new Date(2023, 10, 6),
                hours: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
            },
            {
                date: new Date(2023, 10, 7),
                hours: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
            },
            {
                date: new Date(2023, 10, 8),
                hours: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
            },
            {
                date: new Date(2023, 10, 9),
                hours: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
            },
            {
                date: new Date(2023, 10, 10),
                hours: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
            },
            {
                date: new Date(2023, 10, 11),
                hours: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"],
            },
        ],
        description:
            "Dr. Mariusz Kowal to doświadczony lekarz rodzinny, dbający o zdrowie swojej społeczności. Zawsze ciepły i pełen empatii, słucha uważnie pacjentów i dostosowuje opiekę do ich potrzeb. Posiada szeroką wiedzę medyczną i promuje zdrowy styl życia.",
    },
    {
        firstname: "Anna",
        lastname: "Kot",
        image: "../images/3.jpg",
        title: "Dr.med",
        specialization: "Pediatra",
        availableTimes: [
            {date: new Date(2023, 11, 6), hours: ["12:00", "12:30"]},
        ],
        description:
            "Dr. Anna Kot to certyfikowany pediatra specjalizujący się w opiece nad dziećmi i młodzieżą. Jej przyjazne podejście sprawia, że wizyty u niej są przyjemnością. Potrafi tłumaczyć skomplikowane kwestie medyczne rodzicom i jest gotowa na pytania. Zrozumie znaczenie opieki pediatrycznej w rozwoju dzieci.",
    },
    {
        firstname: "Jan",
        lastname: "Spych",
        image: "../images/2.jpg",
        title: "Lek.",
        specialization: "Lekarz rodzinny",
        availableTimes: [
            {date: new Date(2023, 11, 6), hours: ["12:00", "12:30"]},
        ],
        description:
            "Dr. Jan Spych to lekarz rodzinny, skupiający się na promocji zdrowego stylu życia wśród pacjentów. Jego podejście to zapobieganie chorobom i utrzymanie zdrowia. Organizuje warsztaty i prelekcje na temat zdrowego odżywiania i aktywności fizycznej.",
    },
    {
        firstname: "Karolina",
        lastname: "Wach",
        image: "../images/4.jpg",
        title: "Dr.",
        specialization: "Pediatra",
        availableTimes: [
            {date: new Date(2023, 11, 6), hours: ["12:00", "12:30"]},
        ],
        description:
            "Dr. Karolina Wach to doświadczona pediatra, ciesząca się zaufaniem rodziców dzięki wnikliwości i trosce o dzieci. Jej gabinet jest przyjaznym miejscem, a jej zaangażowanie w profilaktykę zdrowotną pozwala na kompleksową opiekę pediatryczną.",
    },
];
