/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlack: "#1F1F1F",
        borderGrey: "#66666659",
        textGrey: "#666666",
        textGrey2: "#667085",
      },
      fontFamily: {
        inter: ["'Manrope', sans-serif"],
      },
    },
  },
  plugins: [],
};
