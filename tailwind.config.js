/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f6f2",
        charcoal: "#111111",
        gold: "#c6a95d",
        softgray: "#e8e6e1",
        stone: "#d6d3cc"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      letterSpacing: {
        luxury: "0.35em",
        ultra: "0.45em",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.08)",
        luxury: "0 20px 60px rgba(0,0,0,0.12)"
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.4, 0, 0.2, 1)",
      }
    },
  },
  plugins: [],
}
