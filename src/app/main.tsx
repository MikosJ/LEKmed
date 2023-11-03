import React from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home.tsx";
import { ReservationPage } from "./pages/Reservation.tsx";
import { Header } from "./components/Header.tsx";
import { PageNotFound } from "./pages/PageNotFound.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rezerwacja" element={<ReservationPage />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
      {/*<Footer />*/}
    </BrowserRouter>
  </React.StrictMode>,
);
