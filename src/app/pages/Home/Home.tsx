import { DoctorCard } from "./Card/DoctorCard.tsx";
import { MainContent } from "../../styledComponents/MainContent/MainContent.ts";
import { HomeDescription, HomeTitle } from "./HomeTitle.ts";
import { doctors } from "../../hardcoded/doctors.ts";
import { CardContainer } from "./Card/CardStyles.ts";

export const HomePage = () => {
  return (
    <MainContent>
      <HomeTitle>Najlepsi specjaliści w jednym miejscu</HomeTitle>
      <HomeDescription>
        Centrum Medyczne LekMED to przychodnia wielospecjalistyczna. Stawiając
        na rozwój , nieustannie doskonaląc swoje umiejętności zapewniamy
        pacjentom najnowsze metody leczenia i jak najlepszą opiekę.
      </HomeDescription>
      <CardContainer>
        {doctors.map((doctor, index) => (
          <DoctorCard {...doctor} key={index} />
        ))}
      </CardContainer>
    </MainContent>
  );
};
