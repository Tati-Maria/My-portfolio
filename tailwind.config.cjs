/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        glacial: ["Glacial Indifference", "sans-serif"]
      }
    },
  },
  plugins: [],
}
