module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: '#3e67e6'
      },
      secondary: {
        DEFAULT: '#2b7ae8'
      },
      black: {
        DEFAULT: '#0b050f'
      },
      white: {
        DEFAULT: '#f6f8fa'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
