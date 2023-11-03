import { DoctorCard } from "../components/DoctorCard.tsx";
import { MainContent } from "../components/styled/MainContent.ts";
import { Doctor } from "../types/types.ts";
import {HomeDescription, HomeTitle} from "../components/styled/MainContent/HomeTitle.ts";
import {CardContainer} from "../components/styled/Card/CardStyles.ts";

const doctors: Doctor[] = [
  {
    firstname: "Mariusz",
    lastname: "Kowal",
    image: "../images/1.jpg",
    title: "Dr.",
    specialization: "Lekarz rodzinny",
    availableTimes: [{ date: "03.12.2023", hours: ["12:00", "12:30"] }],
    description: "Dr. Mariusz Kowal to doświadczony lekarz rodzinny, który od wielu lat dba o zdrowie mieszkańców swojej społeczności. Zawsze ciepła i pełna empatii, jest znana z tego, że słucha uważnie swoich pacjentów i dostosowuje opiekę do ich indywidualnych potrzeb. Jej szeroka wiedza medyczna obejmuje opiekę nad pacjentami w każdym wieku, a jej zrozumienie znaczenia zdrowego stylu życia sprawia, że pomaga swoim pacjentom osiągnąć i utrzymać optymalne zdrowie."
  },
  {
    firstname: "Anna",
    lastname: "Kot",
    image: "../images/2.jpg",
    title: "Dr.med",
    specialization: "Pediatra",
    availableTimes: [{ date: "03.12.2023", hours: ["12:00", "12:30"] }],
  description: "Dr. Anna Kot to certyfikowany pediatra, która specjalizuje się w opiece nad dziećmi i młodzieżą. Jej przyjazne podejście do małych pacjentów sprawia, że wizyty u niej są zawsze przyjemnością. Jest znany z tego, że potrafi tłumaczyć rodzicom skomplikowane kwestie medyczne w prosty sposób i jest gotów odpowiedzieć na wszystkie ich pytania. Dr. Kot w pełni rozumie, jak ważna jest opieka pediatryczna w procesie rozwoju dzieci."
  },
  {
    firstname: "Jan",
    lastname: "Spych",
    image: "../images/3.jpg",
    title: "Lek.",
    specialization: "Lekarz rodzinny",
    availableTimes: [{ date: "03.12.2023", hours: ["12:00", "12:30"] }],
    description:"Dr. Jan spych to lekarz rodzinny, który kładzie duży nacisk na promocję zdrowego stylu życia wśród swoich pacjentów. Jego podejście opiera się na zapobieganiu chorobom i utrzymaniu zdrowia, a nie tylko leczeniu schorzeń. Dr. Spych jest aktywny społecznie i często organizuje warsztaty i prelekcje na temat zdrowego odżywiania i aktywności fizycznej."
  },
  {
    firstname: "Karolina",
    lastname: "Wach",
    image: "../images/4.jpg",
    title: "Dr.",
    specialization: "Pediatra",
    availableTimes: [{ date: "03.12.2023", hours: ["12:00", "12:30"] }],
  description: "Dr. Karolina Wach to doświadczona pediatra, która zdobyła zaufanie rodziców dzięki swojej wnikliwości i trosce o dobro dzieci. Jej gabinet jest przyjaznym miejscem, gdzie dzieci czują się komfortowo i bezpiecznie. Dr. Szymańska jest również znana z tego, że jest zaangażowana w działania na rzecz profilaktyki zdrowotnej wśród najmłodszych pacjentów i ich rodzin. Jej wiedza i doświadczenie pozwalają jej zapewnić kompleksową opiekę pediatryczną."
  },
];

export const HomePage = () => {
  return (
    <MainContent>
      <HomeTitle>Najlepsi specjaliści w jednym miejscu</HomeTitle>
      <HomeDescription>Centrum Medyczne LekMED to przychodnia wielospecjalistyczna. Stawiając na rozwój , nieustannie doskonaląc swoje umiejętności zapewniamy pacjentom najnowsze metody leczenia i jak najlepszą opiekę.</HomeDescription>
      <CardContainer>
        {doctors.map((doctor) => (
          <DoctorCard {...doctor} />
        ))}
      </CardContainer>
    </MainContent>
  );
};
