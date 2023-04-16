/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'footer': "200px auto 200px"
      }
    },
    fontFamily: {
      'basic': ['RobotoSlab'],
    }
  },
  plugins: [],
}

