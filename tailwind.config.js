/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        bluish: {
          100: "hsl(240, 5%, 91%)",
          300: "hsl(240, 73%, 65%)",
          500: "hsl(240, 73%, 65%)",
          700: "hsl(240, 6%, 50%)",
          900: "hsl(238, 29%, 16%)",
        },        
        violet: "hsl(273, 75%, 66%)",
        red: "hsl(14, 88%, 65%)",
      },
      fontFamily: {
        "kumbhSans": "Kumbh Sans"
      },
    },
  },
  plugins: [],
}
