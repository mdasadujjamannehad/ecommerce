/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px',
      },
      colors: {
        'textColor': '#767676',
        'categoryBg':'#F5F5F3',
        'borderBg':'#979797',
        'footerBg':'#F5F5F3',
      },
      fontFamily: {
        "dmFonts": ['DM Sans']
      },
      width:{
        logoW:'40%',
        menuW:'60%',
      },
      spacing: {
        '84px': '84px',
      }
    },
    plugins: [],
  }
}

