import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F14",
        accent: {
          1: "#F59E0B",
          2: "#3B82F6",
        },
        text: "#E0E0E0",
        ctaHover: "#FBBF24",
      },
      fontFamily: {
        heading: ["var(--font-orbitron)", "Montserrat", "sans-serif"],
        body: ["var(--font-inter)", "Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
