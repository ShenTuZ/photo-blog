/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo': {
          'bg': '#FFFDF5',
          'ink': '#000000',
          'accent': '#FF6B6B',
          'secondary': '#FFD93D',
          'muted': '#C4B5FD',
          'white': '#FFFFFF',
        }
      },
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px #000',
        'neo-md': '8px 8px 0px 0px #000',
        'neo-lg': '12px 12px 0px 0px #000',
        'neo-xl': '16px 16px 0px 0px #000',
        'neo-white': '16px 16px 0px 0px #fff',
      },
      textShadow: {
        'neo': '4px 4px 0px #000',
        'neo-lg': '6px 6px 0px #000',
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
