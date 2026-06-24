import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        wisely: {
          /* Brand */
          primary: "#C69214",
          gold: "#C69214",
          goldDark: "#9A7410",

          /* Main backgrounds */
          ink: "#0B1220",
          surface: "#FAF8F2",
          panel: "#FFFFFF",

          /* Text */
          text: "#111827",
          textMuted: "#4B5563",
          textOnDark: "#FFFFFF",

          /* Borders */
          line: "#E7DCC6",

          /* Section accents */
          sage: "#68AA7B",
          rose: "#F472B6",
          sky: "#60A5FA",
          amber: "#E8BF24"
        }
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg,#FFFDF8 0%,#FAF8F2 100%)",

        "dashboard-gradient":
          "linear-gradient(135deg,#08101D 0%,#0B1220 50%,#111C33 100%)",

        "fashion-gradient":
          "linear-gradient(180deg,#FFF4F7 0%,#FDE7EF 100%)",

        "grocery-gradient":
          "linear-gradient(180deg,#F3FFF4 0%,#E5F7E8 100%)",

        "map-gradient":
          "linear-gradient(180deg,#F3F8FF 0%,#E7F0FF 100%)",

        "seller-gradient":
          "linear-gradient(180deg,#FFF8E8 0%,#F8E7B5 100%)"
      },

      boxShadow: {
        glow: "0 18px 50px rgba(198,146,20,0.18)",
        card: "0 10px 30px rgba(17,24,39,0.08)",
        premium: "0 20px 60px rgba(198,146,20,0.18)"
      },

      borderRadius: {
        premium: "24px"
      }
    }
  },

  plugins: []
};

export default config;
