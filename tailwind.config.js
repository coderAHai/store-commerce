/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js, ts,jsx,tsx,vue,css}'],
  theme: {
    extend: {
      screens: {
        lg: '992px'
      },
      colors: {
        primary: '#ff6b6b',
        secondary: '#794afa',
        'secondary-dark': '#453c5c',
        white: '#ffffff',
        'light-bg': '#f2f3f5',
        'light-text': '#7c899a',
        border: '#e5e8ec',
        dark: '#0a021c'
      },
      fontSize: {
        small: 13,
        smaller: 11
      },
      fontFamily: {
        body: ['Rubik', 'sans-serif'],
        title: ['Poppins']
      }
    }
  },
  plugins: []
}
