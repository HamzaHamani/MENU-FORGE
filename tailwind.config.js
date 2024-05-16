/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F2F9ED",
        primary: "#064929",
        darkprimary: "#032019",
        secondary1: "#AFDD97",
        secondary2: "#40AD52",
        accent: "#D3D34F",
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },

      xs: { max: "425px" },
      xss: { max: "320px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
