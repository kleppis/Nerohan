import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Analytics } from "@vercel/analytics/react"; // Forsikre deg om at stien er korrekt
import NotFound from "./pages/notFound";
import Prosjekter from "./pages/prosjekter";
import Tjenester from "./pages/tjenester/tjenester";
import Rehabilitering from "./pages/tjenester/rehabilitering";
import Kontakt from "./pages/kontakt";
import Totalenterprise from "./pages/tjenester/totalenterprise";
import Tilbygg from "./pages/tjenester/tilbygg";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prosjekter" element={<Prosjekter />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/tjenester" element={<Tjenester />} />
        <Route path="/tjenester/rehabilitering" element={<Rehabilitering />} />
        <Route
          path="/tjenester/totalenterprise"
          element={<Totalenterprise />}
        />
        <Route path="/tjenester/tilbygg" element={<Tilbygg />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics /> {/* Plassert utenfor Routes, men innenfor Router */}
    </Router>
  );
};

export default App;
