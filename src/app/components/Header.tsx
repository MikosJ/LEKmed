import { HeaderText } from "../styledComponents/Bar/HeaderText.ts";
import { Bar } from "../styledComponents/Bar/Bar.ts";
import { BarSection } from "../styledComponents/Bar/BarSection.ts";
import { Logo } from "../styledComponents/Bar/Logo.ts";

export const Header = () => {
  return (
    <Bar $header={true}>
      <Logo src={"../svg/logo.svg"}></Logo>
      <BarSection>
        <HeaderText href={"/"} target={"_blank"}>
          Strona główna
        </HeaderText>
        <HeaderText href={"//x.com"} target={"_blank"}>
          Twitter
        </HeaderText>
        <HeaderText href={"https://www.nfz.gov.pl/"} target={"_blank"}>
          NFZ
        </HeaderText>
      </BarSection>
    </Bar>
  );
};
