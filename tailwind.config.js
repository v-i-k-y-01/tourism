/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nature: {
          forest: "#151515",
          meadow: "#2B2B2B",
          slate: "#626262",
          azure: "#EDEDED",
          cobalt: "#7A1422",
          bg: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 12px 30px -25px rgba(0, 0, 0, 0.25)",
        "card-hover": "0 24px 48px -24px rgba(0, 0, 0, 0.3)",
        glow: "0 12px 35px -22px rgba(122, 20, 34, 0.4)",
      },
      backgroundImage: {
        "nature-gradient": "linear-gradient(135deg, #7A1422 0%, #4A1018 100%)",
        "nature-gradient-green": "linear-gradient(135deg, #2B2B2B 0%, #151515 100%)",
      },
      animation: {
        "mesh-move": "meshMove 18s ease-in-out infinite",
        "mesh-move-slow": "meshMove 26s ease-in-out infinite reverse",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        meshMove: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(6%, -8%) scale(1.08)" },
          "66%": { transform: "translate(-5%, 5%) scale(0.96)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
