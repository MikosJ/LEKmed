import { Wrapper } from "../components/styled/Wrapper.ts";
import { Test } from "../components/Test.tsx";
import { MainContent } from "../components/styled/MainContent.ts";
import { Doctor } from "../types/types.ts";

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
    firstname: "Kupa",
    lastname: "Mikos",
    image: "../images/4.jpg",
    title: "Dr.",
    specialization: "Pediatra",
  },
];

export const HomePage = () => {
  return (
    <>
      <MainContent>
        {doctors.map((doctor) => (
          <Wrapper>
            <Test {...doctor} />
          </Wrapper>
        ))}
      </MainContent>
    </>
  );
};
