/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
    colors: {
      gray: {
        100: "#D6D6F2",
        200: "#E2E2F5"
      },
      blue: {
        100: "#212187",
        200: "#151557",
        300: "#000013"
      },
      purple: "#BF7BFB"
    },
    extend: {
      backgroundImage: {
        "stars": "url('./src/assets/stars.svg')"
      }
    }

  },
  plugins: [],
}

