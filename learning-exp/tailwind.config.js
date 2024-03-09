/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        "roboto-regular": ['RobotoRegular', 'sans-serif'],
        "roboto-medium": ['RobotoMedium', 'sans-serif'],
        "poppins-regular": ['PoppinsRegular', 'sans-serif'],
        "poppins-medium": ['PoppinsMedium', 'sans-serif'],
        "poppins-semibold": ['PoppinsSemiBold', 'sans-serif'],
      },
      colors: {
        'primary': "#F9F9FF",
        'heroHead': "#333697",
        'heroBg': "#262BDB",
        'black': "#000000",
        'subHead': "#707070",
        'footerDiv': "#EBEBF8",
        'footerLinks': "#8A8A8A",
        'contactDiv': "#333697",
        'blue': "#1453FF",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'cardShadow': '0px 0px 76px #0000000D;',
        'cardShadow2': 'box-shadow: 0px 0px 37px #0000000D',
      },
      backgroundImage: {
        'hero': "url('assets/images/woman-in-blue-crew-neck-shirt-using-black-laptop-computer-3994051.png')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}