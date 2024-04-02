/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#357266',
      },
      backgroundImage: theme => ({
        'radial-gradient-yellow': 'radial-gradient( #ffb534, #FFFF00 )',
      }),
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      },
    },
  },
  plugins: [],
};
