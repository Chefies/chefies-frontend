/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2dbb54",
        secondary: "#75e45d",
      },
    },
  },
  plugins: [],
};
