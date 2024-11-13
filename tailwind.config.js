// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// // tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path as per your project structure
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      colors: {
        dark: '#162D3A',    // Define your primary color
        grey: '#F3F9FA',  // Define your secondary color
        white: '#F7FBFF',     // Define an accent color
        lightblue:'#F7FBFF',// Define a neutral color
        orange : '#FF9500',
        // ===== FOR LABELS ====

        purple : '#EBEBFF',
        yellow : '#FFF2E5',
        green : '#E1F7E3',
        red : '#FFF0F0'
        // You can also add other color names here
      }
    },
  },
  plugins: [],
}
