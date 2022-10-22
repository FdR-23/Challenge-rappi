/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        alumni: ["Alumni Sans Collegiate One"],
        ubuntu: ["Ubuntu"],
      },
      width: {
        'w-22': '5.6rem',
      },
      margin: {
        '2px': '2px 2px  0px 2px',
      }
    },
  },
  plugins: [],
}

