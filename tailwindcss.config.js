module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico'],
        'montserrat': ['Montserrat'],
        'roboto': ['Roboto'],
        'righteous': ['Righteous'],
        'lato': ['Lato'],
        'raleway': ['Raleway'],
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
