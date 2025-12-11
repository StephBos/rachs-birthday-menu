/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            yesteryear: ['Yesteryear', 'cursive'],
         },
      },
   },
   plugins: [require('tailwindcss-textshadow')],
}
