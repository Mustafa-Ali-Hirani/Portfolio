/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19',       // Deep dark background
          card: '#161F30',       // Dark blue card background
          accent: '#3B82F6',     // Premium blue accent
          textPrimary: '#F3F4F6',// Off-white for main text
          textSecondary: '#9CA3AF'// Gray for descriptions
        }
      }
    },
  },
  plugins: [],
}