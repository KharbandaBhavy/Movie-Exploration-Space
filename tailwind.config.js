module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      bc: "#000000",
      primary: "#FFFDFB",
      secondary: "#F806CC",
      danger: "#400D51",
      lightGrey: "#FDB9FC",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
