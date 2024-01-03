/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "1280px",
        },
      },
      colors: {
        primary: "#ffffff",
        secondary: {
          DEFAULT: "#000000",
          300: "#1f1f1f",
          200: "#1a1a1a",
          250: "#121212",
          100: "#313131",
          blue: "#30353c",
        },
        yellow: "#f5c518",
        blue: "#5799ef",
      },
    },
  },
  plugins: [],
};
