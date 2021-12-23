const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // NOTE: configure this if you have another folder with tsx files or (that uses stylinggs)
  content: ["./src/**/*.jsx"],
  mode: "jit",
  theme: {
    colors: {
      // theme colors

      // add all default colors
      ...colors,
    },

    // NOTE: Add the lines below if you want to add a google font
    fontFamily: {
      sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
