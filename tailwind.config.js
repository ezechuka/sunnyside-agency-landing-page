/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '960px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        barlow: 'Barlow, sans-serif',
        fraunces: 'Fraunces, serif'
      },
      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51,  100%, 49%)',
        darkDesaturatedCyan: 'hsl(167, 40%, 24%)',
        lightDesaturatedCyan: 'hsl(167, 40%, 70%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkModerateCyan: 'hsl(168, 34%, 41%)',
        veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}