/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',   // your main app folder
    './pages/**/*.{js,ts,jsx,tsx}', // optional if you use pages folder
    './components/**/*.{js,ts,jsx,tsx}', // optional if you have components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
