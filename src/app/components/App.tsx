import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";
import { MainContent } from "./styled/MainContent/MainContent.tsx";
import { Content } from "./styled/Content";

export const App = () => {
  return (
    <>
      <Content>
        <Header />
        <MainContent />
        <Footer />
      </Content>
    </>
  );
};
