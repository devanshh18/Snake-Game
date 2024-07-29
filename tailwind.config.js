/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        vt323: ["VT323", "monospace"],
      },
      gridTemplateColumns: {
        "20-cols": "repeat(20, 20px)",
      },
      gridTemplateRows: {
        "20-rows": "repeat(20, 20px)",
      },
      boxShadow: {
        "inset-green1": "inset 0 0 0 10px #595f43",
        "inset-green2": "inset 0 0 0 10px #abb78a",
        "inset-green3": "inset 0 0 0 5px #8b966c",
      },
      inset: {
        "3/5": "60%",
      },
      colors: {
        "custom-gray": "#333",
      },
      width: {
        "custom-width": "300px",
      },
      fontSize: {
        'custom-size': "24px"
      }
    },
  },
  plugins: [],
};
