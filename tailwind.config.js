/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/sol.png')",
        dark: "url('/luna.png')",
        music: "url('/fondo1.png')",
        programming: "url('/fondo2.png')",
      },
      colors: {
        bordo: '#540000',
      },
    },
  },
  plugins: [],
}
