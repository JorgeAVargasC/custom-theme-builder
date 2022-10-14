/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const customColors = {
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {...customColors, ...colors }
  },
  plugins: [
  ],
}
