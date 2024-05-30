/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans serif"],
      },
      colors: {
        darkBlue: "#000814",
        gold: "	#eead0e",
        brightGold: "#FFD60A",
      },
    },
  },
  plugins: [],
};
