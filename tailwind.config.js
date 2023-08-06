/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "natural-light-orange": "#f9f4f1",
        "natural-green": "#013930",
        "natural-white": "#ffffff",
        "natural-orange": " #ffa95e",
        "natural-black": "#000000",
        "natural-grey": "#a7a7a7",
      },
      fontFamily: {
        modak: ["Modak"],
        silk: ["Silk Serif"],
        avenir: ["Avenir"],
        dmMono: ["DM Mono"],
      },
    },
  },
  plugins: [],
};
