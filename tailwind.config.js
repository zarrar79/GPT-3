/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens :{
      'xs' : '231px',
    },
    fontFamily: {
      Manrope: 'Manrope, sans-serif',
    },
    extend: {
      backgroundColor: {
        'blue': '#072D56',
        'bluish': '#052D56'
      },
      textColor: {
        'offWhite': '#81AFDD',
      }
  },
  plugins: [],
  }
}
