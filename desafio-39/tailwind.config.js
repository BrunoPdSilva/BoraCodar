/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#685ED9",
      purple_dark: "#4439C7",
      yellow_light: "#FAF2E7",
      custom_yellow:  "#FFB703",
      yellow: "#F5D9AD",
      gray: {
        100: "#FAFAFA",
        200: "#E3E1E4",
        300: "#75747A",
        400: "#2F2F33",
        500: "#0C0C0D",
      },
    },
    lineHeight: {
      130: "130%",
      150: "150%",
    },
    backgroundImage: {
      gradient_light: "linear-gradient(77deg, #4453B2 -0.41%, #502C9E 98.95%)",
      gradient_dark: "linear-gradient(180deg, #0F0A31 0%, #3F347E 100%)",
      gradient_yellow: "linear-gradient(108deg, #F9D399 9.14%, #D4983E 93.12%)",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
