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