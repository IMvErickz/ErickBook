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
        field: '#312e81',
        purplee: '#5609b4',
        greeen: ' #118c01',
        cyyan: ' #06d5cc'
      },

      fontFamily: {
        apple: 'Helvetica'
      }
    },
  },
  plugins: [],
}
