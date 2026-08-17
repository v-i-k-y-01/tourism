/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nature: {
          forest: "#5C171B",
          meadow: "#8F2528",
          slate: "#8B6661",
          azure: "#C74634",
          cobalt: "#A91D2A",
          bg: "#FFF8EC",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 45px -15px rgba(92, 23, 27, 0.18)",
        "card-hover": "0 30px 60px -12px rgba(199, 70, 52, 0.25)",
        glow: "0 0 60px rgba(169, 29, 42, 0.22)",
      },
      backgroundImage: {
        "nature-gradient": "linear-gradient(135deg, #C74634 0%, #A91D2A 100%)",
        "nature-gradient-green": "linear-gradient(135deg, #8F2528 0%, #5C171B 100%)",
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
