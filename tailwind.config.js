/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kashmiri: {
          saffron: '#FF9933', // Deep Orange/Saffron
          chinar: '#A52A2A', // Rusty Red
          dal: '#008080', // Teal/Blue
          wood: '#5C4033', // Dark Brown
          paper: '#F5F5DC', // Beige/Paper Mache background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'], // For a more traditional feel
      },
      backgroundImage: {
        'pattern': "url('/patterns/kashmiri-pattern.png')", // Placeholder
      }
    },
  },
  plugins: [],
}
