module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}', './public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zomato:
        {
          50: '#ffe5e8',
          100: '#fbb8c0',
          200: '#f38b98',
          300: '#ed5e6f',
          400: '#e73245',
          500: '#ce1a2d',
          600: '#a11222',
          700: '#740b18',
          800: '#47050d',
          900: '#1e0002',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
