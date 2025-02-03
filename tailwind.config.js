/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#061257",
        secondary: "#0A65Fc",
      },
      fontFamily: {
        mukta: ["Mukta Malar", "serif"],
      },
      backgroundImage: {
        videoFrameBg: "url('../src/assets/images/promo-video-thumb.1ef9da81.jpg')",
      },
    },
  },
  plugins: [],
});
