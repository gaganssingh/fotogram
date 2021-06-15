module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fill: (theme) => ({ red: theme("colors.red.primary") }),
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// TODO Add to Tailwind Config
// bg-blue-medium -> hex code
// text-red-primary -> hex code
// text-blue-medium -> hex code
// text-gray-base -> hex code
// border-gray-primary -> hex code
