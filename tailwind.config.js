/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'lightGray': '#dedddf',
        'darkGray': '#8e8593',
        'darkViolet': '#21092f',
        'red': '#ff5252',
      },

    },
  },
  plugins: [],
}

