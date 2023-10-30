import { Title } from "./styled/Title.ts";
import { Bar } from "./styled/Bar.ts";
import {BarSection} from "./styled/BarSection.ts";

export const Header = () => {
  return (
    <Bar $header>
      <img src={"../svg/logo.svg"} alt={"logo"} height={"100px"}></img>
        <BarSection>
            <Title>Lekarze</Title>
            <Title>O nas</Title>
            <Title>Kontakt</Title>
        </BarSection>

    </Bar>
  );
};
