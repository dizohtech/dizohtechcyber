/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        luxury: {
          gold: '#D4AF37',
          cream: '#F5E6D3',
          charcoal: '#36454F',
          maroon: '#800000',
          navy: '#000080',
        },
      },
    },
  },
  plugins: [],
}