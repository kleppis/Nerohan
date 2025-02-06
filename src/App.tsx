import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Analytics } from "@vercel/analytics/react"; // Forsikre deg om at stien er korrekt
import NotFound from "./pages/notFound";
import Prosjekter from "./pages/prosjekter";
import Tjenester from "./pages/tjenester";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prosjekter" element={<Prosjekter />} />
        <Route path="/tjenester" element={<Tjenester />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics /> {/* Plassert utenfor Routes, men innenfor Router */}
    </Router>
  );
};

export default App;
