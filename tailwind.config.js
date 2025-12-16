/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
      keyframes: {
        twinkle: {
          '0%': { opacity: 0.1, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.2)' },
          '100%': { opacity: 0.1, transform: 'scale(1)' }
        }
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
} 