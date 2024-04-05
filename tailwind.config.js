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
      colors: {
        bgWhite: "rgb(252 252 243 / 0.95)",
        green: "#00e054",
        darkGray: "#353838",
        darkGray2: "#1e1f20",
        blackLow: "#131314",
        yellowStar: "#f7b702",
        textStatic: "#757574",
        blueGray: "#313342",
      },
      fontSize: {
        textMobile: "14px",
        textMobileStatistic: "16px",
        textModileCompare: "13px",
        textModileTotalPoint: "17px",
      },
      backgroundColor: {
        hslDark: "hsl(240 6% 10%)",
      },
      keyframes: {
        "light-up": {
          "0%": { opacity: 0, transform: "translateX(0)" },
          "25%": { opacity: 0.5, transform: "translateX(5px)" },
          "50%": { opacity: 1, transform: "translateX(10px)" },
          "75%": { opacity: 0.5, transform: "translateX(5px)" },
          "100%": { opacity: 0, transform: "translateX(0px)" },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
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
      middeLaptop: "900px",
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      desktopExtra: "1400px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
