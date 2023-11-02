import React from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home.tsx";
import { ReservationPage } from "./pages/Reservation.tsx";
import { Content } from "./components/styled/Content.ts";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Content>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rezerwacja" element={<ReservationPage />} />
        </Routes>
        <Footer />
      </Content>
    </BrowserRouter>
  </React.StrictMode>,
);
