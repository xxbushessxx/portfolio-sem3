/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      background: {
        bright: '#0F0F2E',
        DEFAULT: '#080818',
      },
      foreground: {
        DEFAULT: '#DADFE1',
        dim: '#9AA7AC',
      },
      primary: {
        DEFAULT: '#F4D03F',
        dim: '#AE8D0A',
      },
    },
    fontFamily: {
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
    },
    keyframes: {
      pulsate: {
        from: {
          transform: 'scale(1)',
        },
        '50%': {
          transform: 'scale(1.25)',
        },
        to: {
          transform: 'scale(1.1)',
        },
      },
    },
  },
};
