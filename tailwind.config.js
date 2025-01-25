module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          berkshire: ['Berkshire Swash', 'cursive'],
        },
      },
    },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  }
  