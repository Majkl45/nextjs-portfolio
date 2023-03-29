/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Montserrat, sans-serif",
      ],
    },
    extend: {
      colors: {
        'background': '#111828',
        'background-secondary': 'rgba(0, 0, 0, 0.2)',
        'background-img': 'rgba(0, 0, 0, 0.7)',
        'border-color': '#1e1e25',
        'green': '#23c481',
        'blue': '#00d9ff',
        'primary': '#d6d6dc',
        'secondary': '#a9a9a9',
      },
      keyframes: {
        shake: {
          '0%':   { transform: 'rotate(0deg)'},
          '25%':  { transform: 'rotate(10deg)' },
          '50%':  { transform: 'rotate(0eg)' },
          '75%':  { transform: 'rotate(-10deg)'},
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        shake: 'shake 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
