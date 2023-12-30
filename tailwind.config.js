/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          "100" : '#161616',
          "200" : '#1b1b1b',
          "300" : '#212121',
          "400" : '#282828',
          "500" : '#303030',
          "600" : '#363636',
          "700" : '#3e3e3e',
          "800" : '#454545',
          "900" : '#4e4e4e',
          "default": '#303030',
        },
        secondary : {
          '100': '#e30a13',
          '200': '#d30a13',
          '300': '#c30a13',
          '400': '#b30a13',
          '500': '#a30a13',
          '600': '#8f0a12',
          '700': '#7e0a12',
          '800': '#6d0a12',
          '900': '#5c0a12',
          'default': '#a30a13',
        },
        accent : {
          '100': '#ededed',
          '200': '#e0e0e0',
          '300': '#bdbdbd',
          '400': '#9e9e9e',
          '500': '#757575',
          '600': '#616161',
          '700': '#424242',
          '800': '#212121',
          '900': '#000000',
          'default': '#757575',
        }
      }
    },
  },
  plugins: [],
}