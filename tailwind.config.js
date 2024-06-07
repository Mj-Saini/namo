/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1536px",
        max_md: { max: "768px" },
        max_500: { max: "500px" },
      },
      boxShadow: {
        drop_shadow: "0px 0px 32px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
