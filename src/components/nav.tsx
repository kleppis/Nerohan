"use client";

import { useEffect, useState } from "react";
import { HoverBoxBlue } from "./hoverBox";

export const Nav = () => {
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
          <a href="/" className="relative group/link cursor-pointer">
            <img src="/assets/nero.svg" alt="" className="w-28" />
            <HoverBoxBlue />
          </a>
          <div className="space-x-10  ">
            <a href="/" className="text-white relative group/link ">
              Hjem
              <HoverBoxBlue />
            </a>
            <a href="/prosjekter" className="text-white relative group/link">
              Prosjekter
              <HoverBoxBlue />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
