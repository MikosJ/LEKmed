import { HeaderText } from "./styled/Bar/HeaderText.ts";
import { Bar } from "./styled/Bar/Bar.ts";

export const Footer = () => {
  return (
    <Bar $header={false}>
      <HeaderText>Kontakt</HeaderText>
      <HeaderText>Kontakt</HeaderText>
    </Bar>
  );
};
