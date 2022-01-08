module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
    colors: {
      white: '#fafafa',
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
