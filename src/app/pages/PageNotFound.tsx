import React, { useRef, useEffect } from "react";
import { MainContent } from "../components/styled/MainContent.ts";

export const PageNotFound: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      // Ręczne rozpoczęcie odtwarzania muzyki po zamontowaniu komponentu
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true;
      audioRef.current.play().catch((error) => {
        // Obsługa błędów podczas próby odtworzenia muzyki
        console.error("Błąd podczas odtwarzania muzyki:", error);
      });
    }

    // Czyszczenie muzyki po odmontowaniu komponentu
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <>
      <MainContent $direction={"column"}>
        <audio ref={audioRef} autoPlay loop>
          <source src="/kociak_muzyka.mp3" type="audio/mpeg" />
        </audio>
        <a>Ups...</a>
        <a>Taka strona nie istnieje</a>
        <img src={"../gifs/kociak.gif"} alt={"brak kociaka"} />
      </MainContent>
    </>
  );
};
