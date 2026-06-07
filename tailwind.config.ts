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
          primary: "#7C3AED",
          ink: "#0F172A",
          panel: "#1E293B",
          text: "#F8FAFC",
          line: "#25324B"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
