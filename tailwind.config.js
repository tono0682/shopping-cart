/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#739966",
        primaryLight:"#84ab78",
        secondary: "#e8eaed",
        background: "#122823"
      },
      backgroundImage: {
        'jungle-bg': "url('./public/jungle-bg.jpg')",
      },
    },
  },
  plugins: [],
}

