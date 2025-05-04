/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          VerdeEscuro: "#005011",
          VerdeClaro: "#13A934",
          AzulEscuro: "#1F2937",
        }
      },
    },
    plugins: [],
  }