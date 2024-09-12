/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iceberg: ['Iceberg', 'sans-serif'],
        arial: ['Arial', 'sans-serif']
      },
      colors: {
        red: {
          600: '#DE1616',
          800: '#c00b10'
        },
        gray: {
          900: '#1a1a1a'
        },
        white: '#FAF8F1'
      },
      spacing: {
        30: '120px',
        5: '20px',
        2.5: '10px',
        24: '90px',
        12: '50px',
        15: '60px',
        5: '20px'
      },
      borderRadius: {
        full: '50%'
      },
      width: {
        96: '430px',
        72: '300px'
      },
      height: {
        72: '300px'
      }
    }
  },
  plugins: [],
}
