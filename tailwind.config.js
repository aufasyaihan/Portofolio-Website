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
      boxShadow: {
        'custom-brightGold': '0 0 24px rgba(255, 214, 10, 0.5)',
      },
    },
  },
  plugins: [],
};
