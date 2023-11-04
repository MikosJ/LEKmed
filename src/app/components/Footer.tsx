import { HeaderText } from "../styledComponents/Bar/HeaderText.ts";
import { Bar } from "../styledComponents/Bar/Bar.ts";

export const Footer = () => {
  return (
    <Bar $header={false}>
      <HeaderText>Kontakt</HeaderText>
      <HeaderText>Kontakt</HeaderText>
    </Bar>
  );
};
