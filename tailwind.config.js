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
      blue: {
        light: '#d9efec',
        dark: '#4870D9'
      },
      yellow: '#f9db83',
      orange: '#f8ad83',
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
