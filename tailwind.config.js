/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      marvel :['Marvel'],
    },
    extend: {
      colors: {
        dbz: '#f85b1a',
        success: '#d1e7dd',
        dark: '#ced4da',
        darkText: '#495057',
        light: '#fcfcfd',
        lightText: '#495057',
        primary: '#cfe2f9',
        primaryText: '#052c65',
      }
    },
  },
  plugins: [],
}

