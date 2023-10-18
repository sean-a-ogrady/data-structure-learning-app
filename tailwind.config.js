/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#13005A",
        "lighter-main-dark": "#00337C",
        "complimentary-dark": "#1C82AD",
        "green-dark": "#03C988",
        "red-dark": "#FF5E87"
      },
    },
  },
  plugins: [],
};
