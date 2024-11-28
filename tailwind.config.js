/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FF5A5F",
        "primary-dark": "#D32F2F",
      },
    },
    plugins: [],
  },
};
