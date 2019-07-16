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
    },
  },
  variants: {},
  plugins: [],
}
