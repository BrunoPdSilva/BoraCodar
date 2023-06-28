/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sourceSans: ["Source Sans Pro", "sans-serif"],
        sourceSerif: ["Source Serif Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
