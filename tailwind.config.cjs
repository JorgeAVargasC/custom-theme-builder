/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
// const customColors = require('../../src/theme/index')
const customColors = {
    primary: '#5F369C',
    secondary: '#1F1E3B'
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {...customColors, ...colors},
  },
  plugins: [],
}
