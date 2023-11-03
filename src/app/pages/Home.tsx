import { Test } from "../components/Test.tsx";
import { MainContent } from "../components/styled/MainContent.ts";
import { Doctor } from "../types/types.ts";
import {CardContainer} from "../components/styled/Card/CardContainer.ts";
import {Description} from "../components/styled/MainContent/Description.ts";

const doctors: Doctor[] = [
  {
    firstname: "Jan",
    lastname: "Kowalski",
    image: "../images/1.jpg",
    title: "Dr.",
    specialization: "Lekarz rodzinny",
  },
  {
    firstname: "Anna",
    lastname: "Dymna",
    image: "../images/2.jpg",
    title: "Dr.med",
    specialization: "Lekarz rodzinny",
  },
  {
    firstname: "Jan",
    lastname: "Spych",
    image: "../images/3.jpg",
    title: "Lek.",
    specialization: "Pediatra",
  },
  {
    firstname: "Twój",
    lastname: "Stary",
    image: "../images/4.jpg",
    title: "Dr.",
    specialization: "Pediatra",
  },
];

export const HomePage = () => {
  return (
      <MainContent>
        <Description>
          Najlepsi specjaliści w jednym miejscu
        </Description>
        <CardContainer>
          {doctors.map((doctor) => (
                <Test {...doctor}  />
          ))}
        </CardContainer>
      </MainContent>
  );
};
