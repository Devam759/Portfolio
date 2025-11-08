/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#111111',
        accent: '#333333',
        light: '#f5f5f5',
        gray: {
          100: '#f8f8f8',
          200: '#e0e0e0',
          300: '#c8c8c8',
          400: '#888888',
          500: '#707070',
          600: '#505050',
          700: '#383838',
          800: '#282828',
          900: '#111111',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

