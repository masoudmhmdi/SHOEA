/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        textColor: '#152536',
        btnColor: '#212529',
        secondary: '#FAFAFA',
        primary: '#ECECEC',
      },
      borderRadius: {
        30: '30px',
        25: '30px',
      },
      backgroundImage: {
        welcome: "url('./public/asset/jpg/welcome.jpg')",
        gard: 'linear-gradient(to bottom ,transparent 80%,#000000  )',
      },
    },
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
