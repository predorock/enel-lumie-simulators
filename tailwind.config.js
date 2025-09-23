/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roobert': ['Roobert ENEL', 'sans-serif'],
        'roobert-light': ['Roobert ENEL Light', 'sans-serif'],
        'roobert-bold': ['Roobert ENEL Bold', 'sans-serif'],
      },
      fontWeight: {
        'enel-regular': '400',
        'enel-light': '300',
        'enel-bold': '700',
      }
    },
  },
  plugins: [],
}