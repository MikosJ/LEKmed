import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";
import { Bar } from "./components/styled/Bar.ts";

export const App = () => {
  return (
    <>
      <Header />
      <div>main</div>
      <Bar>
        <Footer />
      </Bar>
    </>
  );
};
