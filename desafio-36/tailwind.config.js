/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#3BAB1E",
      secondary: "#DE215A",
      background: "#D8EED2",
      surface: "#FDFDFD",
      surface_element: "#B1DDA5",
      text_primary: "#242424",
      text_cta: "#FDFDFD",
    },
    fontSize: {
      h1: ["1.5rem", { lineHeight: "2rem", fontWeight: "600", fontFamily: ["Poppins", "sans-serif"] }],
      h2: ["1rem", { lineHeight: "1.5rem", fontWeight: "600", fontFamily: ["Poppins", "sans-serif"] }],
      h3: ["0.875rem", { lineHeight: "1rem", fontWeight: "600", fontFamily: ["Poppins", "sans-serif"] }],
      sh: ["0.875rem", { lineHeight: "1rem", fontWeight: "400", fontFamily: ["Poppins", "sans-serif"] }],
      number_md: ["1rem", { lineHeight: "1.5rem", fontWeight: "400", fontFamily: ["Poppins", "sans-serif"] }],
      number_sm: ["1rem", { lineHeight: "0.875rem", fontWeight: "400", fontFamily: ["Poppins", "sans-serif"] }],
    },
    boxShadow: {
      button_default: "0 8px 16px 0 rgba(59,171,30,.25)",
      button_hover: "0 2px 4px 0 rgba(59,171,30,.25)"
    },   
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
