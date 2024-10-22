/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "greenish": "#95f9c3",
        "bluish":"#0f68a9",
        "deeperBlue": "#0b3866"
      }
    },
  },
  plugins: [],
}