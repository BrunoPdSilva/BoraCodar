/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ibm: ["IBM Plex Sans", "sans-serif"],
    },
    colors: {
      gray: {
        100: "#f8fafc",
        200: "#e2e8f0",
        300: "#94a3b8",
        400: "#334155",
        500: "#1e293b",
        600: "#0f172a",
        700: "#020617",
      },
    },
    extend: {
      backgroundImage: {
        background: "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
