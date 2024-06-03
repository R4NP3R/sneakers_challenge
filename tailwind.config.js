/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'orange': '#F87A1E',
        'gray': '#61636A',
        'blackTitle': '#18191E',
      },
    },
  },
  plugins: [],
}

