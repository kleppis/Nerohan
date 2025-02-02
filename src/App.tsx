import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { Analytics } from "@vercel/analytics/react"; // Forsikre deg om at stien er korrekt

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Analytics /> {/* Plassert utenfor Routes, men innenfor Router */}
    </Router>
  );
};

export default App;
