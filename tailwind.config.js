module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'header': ['Raleway', 'sans-serif'],
      'body': ['Nunito', 'sans-serif']
    },
    colors: {
      white: "#fff",
      black: "#000",
      gray: {
        DEFAULT: "#FAFAFA",
        dark: "#A7A7A7"
      },
      blue: {
        light: '#d9efec',
        dark: '#4870D9'
      },
      yellow: {
        light: '#f9db83',
        dark: '#E6C76D'
      },
      orange: {
        light: '#f8ad83',
        dark: '#D5895F'
      },
      green: '#4AC785',
      red: '#D66565'
    },
    container: {
      padding: {
        xl: '8rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
