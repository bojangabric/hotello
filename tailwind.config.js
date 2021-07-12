const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './next.config.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        120: '30rem'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
