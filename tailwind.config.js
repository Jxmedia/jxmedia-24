/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Sora"],
    },
    extend: {
      colors: {
        darkBG: "#0e0c15",
      },
    },
  },
  plugins: [],
};
