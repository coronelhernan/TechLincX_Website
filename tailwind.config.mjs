/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        'custom-text': '#c0c4d5', // Color personalizado para texto
      },
      fontSize: {
        '4xl': '2.5rem', 
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        '10xl': '16rem',
      },
      brightness: {
        25: '.25', // Muy oscura
        75: '.75', // Ligera oscuridad
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".border-b-1": {
          borderBottom: "1px solid #151515", // Clase personalizada con borde de 1px
        },
      });
    },
  ],
};