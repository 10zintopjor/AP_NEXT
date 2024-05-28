/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#142349',
        customGreen: 'rgb(0, 128, 0)',
        customRed: '#ff0000',
      },
      fontFamily:{
        'defaultFont':["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
}