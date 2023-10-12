/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};
