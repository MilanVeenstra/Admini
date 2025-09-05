/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dutch accounting system brand colors
        'dutch-blue': {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        'dutch-orange': {
          50: '#fff7ed',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        }
      }
    },
  },
  plugins: [],
}