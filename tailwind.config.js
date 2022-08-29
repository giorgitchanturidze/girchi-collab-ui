/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkButton' : '#323329',
        'greenText' : '#327F37',
        'lightRed' : '#F95A64', // Vector 185
        'lightBlue' : '#2F69FF', // Vector 186
        'greenButton' : '#1A8917', // Vector 187 and buttons
        'lightGray' : '#F5F5F7', // Background color
      }
    },
  },
  plugins: [],
}