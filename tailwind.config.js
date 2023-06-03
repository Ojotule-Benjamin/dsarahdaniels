/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ["Playfair Display", "serif"],
        sanchez: ["Sanchez", "serif"],
        sacramento: ["Sacramento", "cursive"],
      },
      colors: {
        "color-text-header": "#094257",
        "color-text-subHeader": "#073F5D",
        "color-text-brand": "#1A1A1A",
        "color-border-borderColor": "#9E9494",
        "color-backgroundColor": "#FFFFFF",
        "color-textColor": "#9B9B9B",
      },
    },
  },
  plugins: [],
};
