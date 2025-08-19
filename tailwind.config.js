/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep blue for primary elements
        secondary: '#1E40AF', // Slightly lighter blue for accents
        accent: '#F59E0B', // Warm yellow for highlights
        background: '#F3F4F6', // Light gray for background
        text: '#111827', // Dark gray for text
      },
    },
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}