"use client";

import { useEffect, useState } from "react";
import { HoverBoxBlue } from "./misc/hoverBox";

interface NavProps {
  title?: string;
}

export const Nav: React.FC<NavProps> = ({ title = "" }) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={` transition-colors duration-500 sticky top-2 z-50 rounded-lg mx-4 ${
          isAtTop ? "bg-none" : "bg-text opacity-90"
        }`}
      >
        <div className="py-3 flex justify-between items-center max-w-7xl mx-auto">
          <a href="/" className="relative group/link cursor-pointer w-1/3">
            <img src="/assets/nero.svg" alt="" className="w-28" />
            <HoverBoxBlue />
          </a>
          <p className="text-white font-libre-bodoni text-2xl uppercase hidden xl:block">
            {title}
          </p>
          <ul className="space-x-10 w-1/3 text-end">
            <a href="/tjenester" className="text-white relative group/link ">
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
        </div>
      </nav>
    </>
  );
};
