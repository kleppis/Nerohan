/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Sørger for å inkludere alle relevante filer
  ],
  theme: {
    extend: {
      keyframes: {
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(40px)" },
        },
        "bounce-x-left": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
        },
        "open-box": {
          "0%": { maxWidth: "0" },
          "100%": { maxWidth: "100%" },
        },
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-40deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        scrollLoop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-120%)" },
        },
      },
      animation: {
        "bounce-x": "bounce-x 1s infinite",
        "bounce-x-left": "bounce-x-left 1s infinite",
        "open-box": "open-box 2s ease-in-out forwards",
        ring: "ring .5s infinite",
        scrollLoop: "scrollLoop 5s linear infinite",
      },
      spacing: {
        128: "32rem", // Eksempel på ny spacing
        144: "36rem",
        spacer: "3.5rem",
      },
      borderRadius: {
        xl: "1.5rem", // Ny grense for hjørneradius
      },
      fontFamily: {
        "walter-turncoat": ['"Walter Turncoat"', "serif"],
        "libre-bodoni": ['"Libre Bodoni"', "serif"],
        "roboto-slab": ['"Public Sans"', "serif"],
      },
      colors: {
        text: "rgb(32, 29, 85)",
        btnHover: "#e3b23c",
      },
    },
  },
  plugins: [],
};
