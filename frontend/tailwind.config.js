/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        xxs: 3.79,
        xs: 7,
        sm: 13,
        md: 18,
        xl: 23,
      },
      colors: {
        surface: {
          yellow: "#FFCC00",
          green: "#79D977",
          red: "#FF7D61",
          "light-gray": "#F7F7F7",
          gray: "#898989",
          "dark-gary": "#3F3F3F",
        },
        border: {
          default: "#898989",
          disabled: "#3F3F3F/50",
        },
        label: {
          warning: "#FF7D61",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
