import { HeaderText } from "./styled/Bar/HeaderText.ts";
import { Bar } from "./styled/Bar/Bar.ts";
import { BarSection } from "./styled/Bar/BarSection.ts";
import { Logo } from "./styled/Bar/Logo.ts";

export const Header = () => {
  return (
    <Bar $header={true}>
      <Logo src={"../svg/logo.svg"}></Logo>
      <BarSection>
        <HeaderText href={"/"}>Strona główna</HeaderText>
        <HeaderText href={"//x.com"}>Twitter</HeaderText>
        <HeaderText href={"https://www.nfz.gov.pl/"}>NFZ</HeaderText>
      </BarSection>
    </Bar>
  );
};
