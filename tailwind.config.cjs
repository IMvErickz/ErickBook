/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: '#202024',
        bgNav: '#4c1d95',
        field: '#312e81'
      },

      fontFamily: {
        apple: 'Helvetica'
      }
    },
  },
  plugins: [],
}
