/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black1: "rgba(0, 0, 0, 0.87)",
        banner: "rgb(19,206,224)"
      },
      fontFamily: {
        title: "Poppins, Times New Roman, sans-serif",
        texts: "Roboto, sans-serif",
      },
      gridTemplateColumns: {
        card: "repeat(auto-fit, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
}