import { DoctorCard } from "../components/DoctorCard.tsx";
import { MainContent } from "../components/styled/MainContent/MainContent.ts";
import {
  HomeDescription,
  HomeTitle,
} from "../components/styled/MainContent/HomeTitle.ts";
import { doctors } from "../hardcoded/doctors.ts";
import { CardContainer } from "../components/styled/Card/CardStyles.ts";

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
        {doctors.map((doctor) => (
          <DoctorCard {...doctor} />
        ))}
      </CardContainer>
    </MainContent>
  );
};
