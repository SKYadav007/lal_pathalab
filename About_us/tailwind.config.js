 {import('tailwindcss').Config} 
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["about.html"],
  theme: {
    extend: {
      
      fontFamily: {
        ptsans: ['"PT Sans"', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'banner-mbl': "url('https://uat-cdn.drlallab.com/2021-07/about-banner-mbl.jpg')",
        'banner-desk': "url('https://uat-cdn.drlallab.com/2022-12/about-banner-desk.png')",
      }
    },
  },
  plugins: [],
}

