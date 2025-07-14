// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors'); // Recommended for explicitly extending default colors if needed

module.exports = {
  // `future` options might be present depending on specific v4.x alpha build
  // future: {
  //   hoverOnlyWhenSupported: true,
  //   respectDefaultRingColor: true,
  //   disableColorOpacityUtilitiesByDefault: true,
  //   // Add other future flags as per Tailwind v4.x documentation
  // },

  // The 'content' array tells Tailwind where to scan for utility classes.
  // Ensure this covers ALL your files where you use Tailwind classes.
  content: [
    // Scans all JS, TS, JSX, TSX, MDX files within your 'src' directory
    './src/**/*.{js,ts,jsx,tsx,mdx}',

    // Including these for broader compatibility if some files might be
    // directly at the root, though './src/**' should cover everything inside 'src'.
    './app/**/*.{js,ts,jsx,tsx,mdx}', // For files directly under root 'app' (e.g., if you don't use 'src')
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // For Pages Router projects
    './components/**/*.{js,ts,jsx,tsx,mdx}', // For components directly under root
  ],

  // 'theme' section for customizing default Tailwind values
  theme: {
    extend: {
      // It's good practice to explicitly bring in default colors if you plan to
      // extend them or troubleshoot issues like blue-600 not appearing.
      // This ensures the default palette is fully available.
      darkMode: 'class',
      colors: {
        // You can add all default colors, or just the ones you are having issues with
        gray: colors.gray,
        blue: colors.blue,
        red: colors.red,
        zinc: colors.zinc,
        'vercel-blue': '#0070F3',
        // Add other default colors you use:
        // yellow: colors.yellow,
        // green: colors.green,
        // indigo: colors.indigo,
        // purple: colors.purple,
        // pink: colors.pink,
        // emerald: colors.emerald,
        // teal: colors.teal,
        // cyan: colors.cyan,
        // sky: colors.sky,
        // lime: colors.lime,
        // amber: colors.amber,
        // orange: colors.orange,
        // violet: colors.violet,
        // fuchsia: colors.fuchsia,
        // rose: colors.rose,
      },
      // Example for custom fonts, if you add them:
      // fontFamily: {
      //   inter: ['Inter', 'sans-serif'],
      // },
      // Example for custom spacing, if you add them:
      // spacing: {
      //   '128': '32rem',
      //   '144': '36rem',
      // },
    },
  },

  // 'plugins' for adding official or third-party Tailwind plugins
  plugins: [
    require('@tailwindcss/typography'), // Example if you use typography plugin
    // require('@tailwindcss/forms'),      // Example if you use forms plugin
  ],
};