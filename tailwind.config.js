/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,jsx,ts,tsx}",
  "./public/index.html",
];
export const theme = {
  extend: {
    fontFamily: {
      berkshire: ['Berkshire Swash', 'cursive'],
    },
  },
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('tailwindcss'),
  // eslint-disable-next-line no-undef
  require('autoprefixer'),
];
