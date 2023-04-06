/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        textColor: '#152536',
        btnColor: '#212529',
      },
      borderRadius: {
        30: '30px',
        25: '30px',
      },
    },
  },
  plugins: [],
};
