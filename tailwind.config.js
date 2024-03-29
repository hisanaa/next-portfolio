module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        'custom-gray' : '#f9f9fc',
      }
    },
    fontFamily : {
      'poppins' : ["Poppins", 'sans-serif'] 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
