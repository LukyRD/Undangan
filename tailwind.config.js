/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#085C94",
      },
      fontFamily: {
        charm: ["Charm"],
        nunitoSans: ["Nunito Sans"],
        lusitana: ["Lusitana"],
      },
      fontSize: {
        "2xs": ["0.625rem"],
      },
    },
  },
  plugins: [],
};
