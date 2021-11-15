const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // NOTE: configure this if you have another folder with tsx files or (that uses stylinggs)
  purge: ["./src/**/*.jsx"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // theme colors

      // add all default colors
      ...colors,
    },

    // NOTE: Add the lines below if you want to add a google font
    fontFamily: {
      sans: ['"Barlow"', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
