import color from 'tailwindcss/colors';
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: color.slate[100],
        secondary: color.slate[950],
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        roboto: ['Roboto'],
        noto: ['Noto Sans'],
      },
    },
  },
  plugins: [],
};
