/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const customColors = {
  'primary': 'var(--primary)',
  'secondary': 'var(--secondary)',
  'neutral-1': 'var(--neutral-1)',
  'neutral-2': 'var(--neutral-2)',
  'neutral-3': 'var(--neutral-3)',
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
