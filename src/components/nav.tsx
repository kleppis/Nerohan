"use client";

import { useEffect, useState } from "react";
import { HoverBoxBlue } from "./misc/hoverBox";
import { FaBars, FaTimes } from "react-icons/fa"; // Ikoner for burgermeny

interface NavProps {
  title?: string;
}

export const Nav: React.FC<NavProps> = ({ title = "" }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`transition-colors duration-500 sticky top-2 z-50 rounded-lg mx-4 px-5 xl:px-0 ${
          isAtTop ? "bg-none" : "bg-text opacity-90"
        }`}
      >
        <div className="py-3 flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="relative group/link cursor-pointer w-1/3">
            <img src="/assets/nero.svg" alt="Logo" className="w-28" />
            <HoverBoxBlue />
          </a>

          {/* Tittel (kun på store skjermer) */}
          <p className="text-white font-libre-bodoni text-2xl uppercase hidden xl:block">
            {title}
          </p>

          {/* Desktop-meny (skjules på små skjermer) */}
          <ul className="hidden xl:flex space-x-10 w-1/3 justify-end">
            <a href="/tjenester" className="text-white relative group/link">
              Tjenester
              <HoverBoxBlue />
            </a>
            <a href="/prosjekter" className="text-white relative group/link">
              Prosjekter
              <HoverBoxBlue />
            </a>
            <a href="/kontakt" className="text-white relative group/link">
              Kontakt
              <HoverBoxBlue />
            </a>
          </ul>

          {/* Burgermeny (vises på små skjermer) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="xl:hidden text-white text-3xl"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* OVERLAY-MENY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 transition-opacity duration-500">
          {/* Lukkeknapp */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-white text-4xl"
          >
            <FaTimes />
          </button>

          {/* Tittel */}
          <p className="text-white font-libre-bodoni text-3xl uppercase mb-8">
            {title}
          </p>

          {/* Lenker */}
          <ul className="space-y-6 text-center text-white text-2xl">
            <li>
              <a
                href="/tjenester"
                onClick={() => setMenuOpen(false)}
                className="hover:underline"
              >
                Tjenester
              </a>
            </li>
            <li>
              <a
                href="/prosjekter"
                onClick={() => setMenuOpen(false)}
                className="hover:underline"
              >
                Prosjekter
              </a>
            </li>
            <li>
              <a
                href="/kontakt"
                onClick={() => setMenuOpen(false)}
                className="hover:underline"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
