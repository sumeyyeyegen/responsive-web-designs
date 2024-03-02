/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        screens:{
          xs:"375px",
          sm:"640px",
          md:"768px",
          lg:"1024px",
          xl:"1140px",
          '2xl':"1140px",
        },
      },
      colors:{
        primary: '#ffbe33',
        secondary: '#222831',
        red:'#ff1111',
      },
      fontFamily:{
        dancing: ['Dancing Script','cursive'],
        opensans: ['Open Sans','sans-serif']
      },
      width:{
        30:'6.5rem'
      },
      backgroundColor:{
        aqua: 'aqua'
      }
    },
  },
  plugins: [],
};
