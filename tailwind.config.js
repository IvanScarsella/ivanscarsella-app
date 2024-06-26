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
      boxShadow: {
        'inner-custom': 'inset 0 1px 15px 3px #1ED760',
        'inner-custom-2': 'inset 0 1px 15px 3px #BD1717',
      },
    },
  },
  plugins: [],
}
