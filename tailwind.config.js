/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['"Oswald"', 'sans-serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('../dist/img/h5-revolution-img-1.jpg')",
      }
    },
  },
  plugins: [],
}

