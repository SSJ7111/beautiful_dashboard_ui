/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#202028",
        customDarkGray: "#44454a",
        textGray: "#727378",
        customBlack: "#141416",
        customNavy: "#283267",
        customBlue: "#7294ff",
        customWhite: "#f5f5f5",
        customRed: "#5f3237",
        customGreen: "#165246",
        customPink: "#5b2a4a",
        textPink: "#e94ba5",
        textGreen: "#00c98d",
        textRed: "#df585b",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
