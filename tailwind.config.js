const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.{js,mdx}', './layouts/**/*.js', './next.config.js']
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: colors.blueGray
      },
      spacing: {
        120: '30rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
