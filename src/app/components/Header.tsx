import { Title } from "./styled/Title.ts";
import { Bar } from "./styled/Bar.ts";

export const Header = () => {
  return (
    <Bar $header>
      <img src={"../svg/logo.svg"} alt={"logo"} height={"100px"}></img>
      <Title>Lekarze</Title>
    </Bar>
  );
};
