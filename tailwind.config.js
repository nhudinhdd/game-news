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
  },
  darkMode: "class",
  plugins: [nextui()],
};
