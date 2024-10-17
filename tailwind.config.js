/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#D8EAF7",
          bgOpposite: "#032054",
          primary: "#0070f3",
          text1: "#000",
          text2: "#666",
          text3: "#999",
          text4: "#ccc",
          text5: "#eee",
        },
        dark: {
          bg: "#032054",
          bgOpposite: "#D8EAF7",
          primary: "#0070f3",
          text1: "#fff",
          text2: "#ccc",
          text3: "#999",
          text4: "#666",
          text5: "#333",
        },
      },
    },
  },
  plugins: [],
};
