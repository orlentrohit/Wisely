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
          primary: "#B8872B",
          ink: "#F8F4EC",
          panel: "#FFFFFF",
          text: "#1F2937",
          line: "#E7DCC6",
          gold: "#B8872B",
          sage: "#6B8464",
          surface: "#F3EDE2"
        }
      },
      boxShadow: {
        glow: "0 18px 50px rgba(184, 135, 43, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
