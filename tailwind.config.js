/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        modak:["Modak"],
        silk:["Silk Serif"],
        avenir:["Avenir"],
        dmMono:["DM Mono"]
      },
    },
  },
  plugins: [],
}

