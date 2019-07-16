const { colors: { black, blue } } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {
        black: {
          ...black,
          'transparent': 'hsl(0,0%,0%,0.3)',
        },
        blue: {
          ...blue,
          'transparent': 'hsl(200,100%,50%,0.2)',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '36rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
