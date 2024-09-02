/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.mdx",
    "./src/**/*.{js,jsx,mjs,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B1F149',
        active: '#9CA3AF',
        inactive: '#6B7280',
        light: '#D1D5DB',
      },
      textColor: {
        primary: '#B1F149',
        dark: '#161A22',
        grey: '#232A33',
        silver: '#9CA3AF',
        light: '#D1D5DB',
        soft: '#F0F1F5',
        fair: '#F3F4F6'
      },
      backgroundColor: {
        primary: '#B1F149',
        secondary: '#CAF684',
        dark: '#232A33',
        light: '#3A424E',
        grey: '#2F3646',
        success: '#34D399',
        warning: '#FDE68A',
        danger: '#F87171',
        backstory: '#161A22'
      },
      borderColor: {
        primary: '#B1F149',
        secondary: '#CAF684',
        shadow: '#374151',
        dark: '#3A424E',
        light: '#4B5563',
        grey: '#6B7280'
      }
    }
  },
  plugins: []
}