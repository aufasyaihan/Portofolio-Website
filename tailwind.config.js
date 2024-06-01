/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans serif"],
      },
      colors: {
        "darkBlue-900": "#000814",
        "darkBlue-500": "#02052d",
        gold: "	#eead0e",
        brightGold: "#FFD60A",
      },
      boxShadow: {
        "custom-brightGold": "0 0 24px rgba(255, 214, 10, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },

        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
};
