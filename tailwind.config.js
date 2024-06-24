/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'opensans': ["Open Sans","sans-serif"],
        'nosifer': ["Nosifer","sans-serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

