/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('/sol.png')",
        'dark': "url('/luna.png')",
      }
    },
  },
  plugins: [],
}

