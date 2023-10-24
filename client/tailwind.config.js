/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./public/**/*.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:  {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      }
    },
    colors: {
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
      'white': "#ffff",
      'gray-new': "#8d99ae",
      'backgrey': "#FCFBFB",
      'bgDark': "#001427",
      'bgDarkSec': "#212738",
      'bgDarkTer': "#3a506b"
    },
    fontFamily: { 
      Montserrat: ["Monserrat", "sans-serif"],
    },
    textColor: theme => ({
			...theme('colors'),
			primary: '#CC2D4A',
			secondary: '#8FA206',
			terciary: '#CCCCCC',
		}),
    variants: {
      width: ["responsive", "hover", "focus"],
      extend: {},
    }
  },
  plugins: [],
}

