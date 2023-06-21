/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      red: {
        100: "#FFE4E4",
        200: "#660000",
      },
      green: {
        100: "#D1FAE5",
        200: "#065F46",
      },
      yellow: {
        100: "#FEF3C7",
        200: "#92400E",
      },
      blue: {
        100: "#ACB8C5",
        200: "#697077",
      },
      gray: {
        100: "#F2F4F8",
        200: "#F8F9FA",
        300: "#C1C7CD",
        400: "#676767 ",
        500: "#1F2937",
        600: "#4D5358",
        700: "#343A3F",
      },
      purple: {
        100: "#4D008C",
      },
    },
  },
  plugins: [],
};
