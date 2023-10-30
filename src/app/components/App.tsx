import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";
import { Main } from "./Main.tsx";
import { Content } from "./styled/Content";

export const App = () => {
  return (
    <>
      <Content>
        <Header />
        <Main />
        <Footer />
      </Content>
    </>
  );
};
