/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-orange": "#FF5823",
        cornsilk: "#FFF8DC",
        darkblue: "#080831",
        whitesmoke: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
