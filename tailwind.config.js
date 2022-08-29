/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkButton' : '#323329',
        'greenText' : '#327F37',
        'lightRed' : '#F95A64', //vector 185
        'lightBlue' : '#2F69FF', //vector 186
        'greenButton' : '#1A8917', //vector 187 and buttons
      }
    },
  },
  plugins: [],
}