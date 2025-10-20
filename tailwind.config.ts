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
        background: "#0B0F1A",
        accent: {
          1: "#00E0FF",
          2: "#1E90FF",
        },
        text: "#E0E0E0",
        ctaHover: "#00A8E8",
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
