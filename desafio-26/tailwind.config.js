/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      brown: {
        100: "#FEECE0",
        200: "#9B6647",
        300: "#58190A",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sourceSans: ["Source Sans Pro", "sans-serif"],
        sourceSerif: ["Source Serif Pro"],
      },
    },
  },
  plugins: [],
};
