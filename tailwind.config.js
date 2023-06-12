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
        primaryColorBlue: "#094257",
        textColorBlack: "#1A1A1A",
        textColorDarkGray: "#7A7E83",
        secondaryColorLight: "#F0EDE8",
        backgroundColor: "#FFFFFF",
        borderColor: "#9B9B9B",
        "color-text-header": "#094257",
        "color-text-subHeader": "#073F5D",
        "color-text-brand": "#1A1A1A",
        "color-border-borderColor": "#9E9494",
        "color-backgroundColor": "#FFFFFF",
        "color-textColor": "#9B9B9B",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    // screens: {
    //   xs: "480px",
    //   sm: "768px",
    //   md: "1060px",
    // },
    //phones
    //tablets
    //laptops
    //large
  },
  plugins: [],
};

// colors: {
//   primaryColorBlue: '#094257',
//   primaryColorWhite: '#FFFFFF',
//   primaryColorBlack: '#1A1A1A',
//   primaryColorGray: '#9B9B9B',
//   primaryColorLight: '#F0EDE8',
//   primaryColorLightGray: '#A6A6A6',
//   primaryColorYellow: '#F1C36D',
//   primaryColorDarkGray: '#7A7E83',
// }
