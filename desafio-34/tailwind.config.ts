import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gradient: "#090909",
      gray: {
        100: "#FBF9FE",
        200: "#AFABB6",
        300: "#252529",
        400: "#17171A",
        500: "#111112",
        600: "#0C0C0D",
      },
      purple: {
        100: "#A881E6",
        200: "#7450AC",
        300: "#523480",
      },
      green: {
        100: "#4E995E",
        200: "#2F723D",
      },
      pink: "#DB5BBF",
      pink_dark: "#251622",
      orange: "#E07B67",
      orange_dark: "#261A17",
      yellow: "#BB9F3A",
      yellow_dark: "#211E12",
      blue: "#7B94CB",
      blue_dark: "#1A1D23",
      second_green: "#8CAD51",
      second_green_dark: "#1C2015",
    },
    extend: {
      backgroundImage: {
        banner: "url(/banner.svg)",
      },
    },
  },
  plugins: [],
};
export default config;
