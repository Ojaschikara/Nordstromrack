/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'below-sm': { max: '639px' }, // Define a "below sm" breakpoint
      },
    },
  },
  plugins: [],
}

