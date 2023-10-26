import { Title } from "./styled/Title.ts";
import { Bar } from "./styled/Bar.ts";

export const Header = () => {
  return (
    <>
      <Bar $header>
        <Title>LekMED</Title>
        <Title>O nas</Title>
        <Title>Lekarze</Title>
      </Bar>
    </>
  );
};
