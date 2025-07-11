// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- This is correct for Tailwind v4.x
    autoprefixer: {},
  },
};