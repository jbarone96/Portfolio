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
        "dark-orange": "#4760eb",
        cornsilk: "#7d8eec",
        darkblue: "#1a237a",
        whitesmoke: "#F5F5F5",
        darkerblue: "#000a40",
      },
    },
  },
  plugins: [],
};
