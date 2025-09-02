/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e5e5e0",
        DarkLava: "#393632",
        SageGray: "#8b8b73",
        gold: "#cfa355",
      },
      screens: {
        custom: "850px",
      },
    },
  },
  plugins: [],
};
