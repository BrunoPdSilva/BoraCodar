/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#7FC4ED",
        blue_dark: "#659ABA",
        white: "#FFFFFF",
        gray: {
          100: "#FBF9FE",
          200: "#322F40",
          300: "#282533",
          400: "#1D1B26",
          500: "#0F0E13",
        },
      },
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
    },
  },
  plugins: [],
}
