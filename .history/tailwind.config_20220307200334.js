module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      sc
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
