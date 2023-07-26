/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#8323FF",
      pink: "#FF2DAF",
      yellow: "#FEEA35",
      white: "#FFFFFF",
      gray: {
        50: "#8B8D9B",
        100: "#373745",
        200: "#2B2B37",
        300: "#1E1F28",
      },
    },
    backgroundImage: {
      gradient1: "linear-gradient(90deg, #8323FF 0%, #FF2DAF 100%)",
      gradient2: "linear-gradient(90deg, #9F55FF 0%, #FF46B9 100%)",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    extend: {
      border: {},
    },
  },
  plugins: [],
};
