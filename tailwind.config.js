const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xl: '1440px',
      }, 
      fontFamily: {
        hankenGrotesk: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        // Primary
        lightRed: 'hsl(0, 100%, 67%)',
        orangeyYellow: 'hsl(39, 100%, 56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',
        // Gradients
        lightSlateBlue: 'hsl(252, 100%, 67%)',     // background 
        lightRoyalBlue: 'hsl(241, 81%, 54%)',      // background 
        violetBlue: 'hsla(256, 72%, 46%, 1)',      // circle 
        persianBlue: 'hsla(241, 72%, 46%, 0)',     // circle 
        // Neutral
        white: 'hsl(0, 0%, 100%)',
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
        // Note: Use transparency to get the color variations necessary to match the design. 
        // Hint: look into using `hsla()`.
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
