import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        hslDark: "hsl(240 6% 10%)",
      },
    },
    minWidth: {
      "2/3": "60%",
      100: "100px",
      20: "20px",
    },
    maxWidth: {
      200: "200px",
      1: "100%",
      "2/3": "60%",
    },
    screens: {
      xss: "0px",
      xssMiddle: "420px",
      mobileMiddle: "525px",
      mobile: "740px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
