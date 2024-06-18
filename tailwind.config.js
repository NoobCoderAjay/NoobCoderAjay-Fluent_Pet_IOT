/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arizona: {
          regular: "ABCArizonaSans-Regular",
          bold: "ABCArizonaSans-Bold",
        },
      },
    },
  },
  plugins: [],
};
