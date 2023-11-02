import { Title } from "./styled/Bar/Title.ts";
import { Bar } from "./styled/Bar/Bar.ts";
import { BarSection } from "./styled/Bar/BarSection.ts";
import { Logo } from "./styled/Bar/Logo.ts";

export const Header = () => {
  return (
    <Bar $header={true}>
      <Logo src={"../svg/logo.svg"}></Logo>
      <BarSection>
        <Title>Lekarze</Title>
        <Title>O nas</Title>
        <Title>Kontakt</Title>
      </BarSection>
    </Bar>
  );
};
