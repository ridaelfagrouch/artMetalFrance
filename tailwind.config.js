const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "slider-from": "#FFE53B",
        "slider-to": "#fd3838",
        "button-from": "#fe8a39",
        "button-to": "#fd3838",
      },
      boxShadow: {
        slider: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        button: "0px 14px 80px rgba(252, 56, 56, 0.4)",
        "button-hover": "0px 14px 80px rgba(252, 56, 56, 0.6)",
      },
    },
  },
  variants: {
    extend: {
      height: ["group-hover"],
      opacity: ["group-hover"],
      transform: ["group-hover"],
    },
  },
  plugins: [],
});