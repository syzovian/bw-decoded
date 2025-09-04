/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0b4d59',
          800: '#0f5a68',
          700: '#136777',
        }
      }
    },
  },
  plugins: [],
};
