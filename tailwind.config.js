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
        bright: '#161616',
        DEFAULT: '#0A0A0A',
      },
      foreground: {
        DEFAULT: '#FAFAFA',
        dim: '#CCCCCC',
      },
      primary: {
        DEFAULT: '#C0493A',
        dim: '#AD4234',
      },
      secondary: {
        DEFAULT: '#689775',
      },
    },
    fontFamily: {
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
    },
  },
};
