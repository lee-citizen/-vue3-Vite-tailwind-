/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        custom: {
          banner: '#223240',
          blueTitle: '#0059b2'
        }
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    height: {
      xl: '50px'
    },
    container: {}
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          // '@screen sm': {
          //   maxWidth: '640px'
          // },
          '@screen md': {
            maxWidth: '750px'
          },
          '@screen lg': {
            maxWidth: '970px'
          },
          '@screen xl': {
            maxWidth: '1170px'
          }
        }
      })
    }
  ]
}
