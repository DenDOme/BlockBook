/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#666666',
        gray: '#444444',
        darkGray: '#333333',
        white: '#ffffff',
        cyan: '#2F4F4F'
      },
      fontFamily: {
        kanit: ['"Kanit"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

