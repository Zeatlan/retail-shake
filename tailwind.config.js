module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing')
      })
    },
    fontFamily: {
      'header': ['Raleway', 'sans-serif'],
      'body': ['Nunito', 'sans-serif']
    },
    colors: {
      white: "#fff",
      black: "#000",
      gray: {
        DEFAULT: "#FAFAFA",
        light: "#CDCDCD",
        dark: "#A7A7A7"
      },
      blue: {
        light: '#d9efec',
        dark: '#4870D9',
        darker: '#2748A1'
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
      red: {
        DEFAULT: '#D66565',
        dark: '#B44C4C'
      },
      purple: '#C598DC',
      dark: {
        lightgray: '#182935',
        gray: '#111827',
        darkgray: '#0A0E18'
      }
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
  plugins: []
}
