/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '924px',
        "xl": "1050px"
      },
      colors: {

        bg_theme: "#06043E",
        // Blue: #05EEFF
        primary: '#05EEFF',
        secondaryBlue: "#19174B",
        secondary: '#06043E',
        tertiary: '#FFFFFF80',
        suditya: '#06043E',


        // primary: '#ec4755',
        // secondary: '#a12c34',
        // tertiary: '#99a0a3',
        // suditya: '#ffffff78',
      },
    },
  },
  plugins: [require("daisyui")],
}