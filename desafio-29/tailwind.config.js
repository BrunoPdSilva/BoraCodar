/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        low: "url(/src/assets/image-2.png)",
        high: "url(/src/assets/image-1.png)",
        drag: "url(/src/assets/drag.svg)",
      },
      boxShadow: {
        border: "0px 0px 0px 8px #FFF inset"
      }
    },
  },
  plugins: [],
};
