/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  // https://tailwindcss.com/docs/preflight
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.black,
        grey: {
          10: "#FAFBFC",
          20: "#F4F5F7",
          30: "#EBECF0",
          40: "#DFE1E6",
          50: "#C1C7D0",
          60: "#B3BAC5",
          70: "#A5ADBA",
          80: "#97A0AF",
          90: "#8993A4",
          100: "#7A869A",
          200: "#6B778C",
          300: "#5E6C84",
          400: "#505F79",
          500: "#42526E",
          600: "#344563",
          700: "#253858",
          800: "#172B4D",
          900: "#091E42",
        },
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        default: theme("colors.grey.400", "currentColor"),
      }),
      fontSize: {
        xxs: "0.6875rem",
      },
    },
  },
  plugins: [],
};
