import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";
import { Content } from "./components/styled/Content.ts";
import { Main } from "./components/styled/Main.ts";

export const App = () => {
  return (
    <Content>
      <Header />
      <Main></Main>
      <Footer />
    </Content>
  );
};
