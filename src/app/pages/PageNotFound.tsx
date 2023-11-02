import { MainContent } from "../components/styled/MainContent.ts";

export const PageNotFound = () => {
  return (
    <>
      <MainContent $direction={"column"}>
        <audio id={"audio"} loop autoPlay>
          <source src={"/kociak.mp3"} type={"audio/mpeg"} />
        </audio>
        <a>Ups...</a>
        <a>Taka strona nie istnieje</a>
        <img src={"../gifs/kociak.gif"} alt={"brak kociaka"} />
      </MainContent>
    </>
  );
};
