import { MainContent } from "../components/styled/MainContent.ts";

export const PageNotFound = () => {
  return (
    <>
      <audio autoPlay loop>
        <source src="/kociak_muzyka.mp3" type="audio/mpeg" />
      </audio>
      <MainContent $direction={"column"}>
        <a>Ups...</a>
        <a>Taka strona nie istnieje</a>
        <img src={"../gifs/kociak.gif"} alt={"brak kociaka"} />
      </MainContent>
    </>
  );
};
