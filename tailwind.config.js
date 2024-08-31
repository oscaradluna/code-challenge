/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.mdx",
    "./src/**/*.{js,jsx,mjs,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        active: '#9CA3AF',
        inactive: '#6B7280'
      },
      textColor: {
        primary: '#B1F149',
        dark: '#161A22',
        grey: '#232A33',
        silver: '#9CA3AF',
        light: '#D1D5DB'
      },
      backgroundColor: {
        primary: '#B1F149',
        secondary: '#CAF684',
        dark: '#232A33',
        light: '#3A424E',
        success: '#34D399',
        warning: '#FDE68A',
        danger: '#F87171'
      },
      borderColor: {
        primary: '#B1F149',
        dark: '#3A424E',
        light: '#4B5563'
      }
    }
  },
  plugins: []
}