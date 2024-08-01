/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        background: "rgb(18, 18, 18)",
        color: "rgb(245, 245, 245)",
        accent: "rgb(25, 25, 25)",
        secondary: "rgb(41, 41, 41)",
        button: "rgb(19, 19, 19)",
      },
    },
  },
  plugins: [],
};
