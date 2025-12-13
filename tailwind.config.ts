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
          cyan: "#06B6D4",
          purple: "#A855F7",
          emerald: "#10B981",
        },
        // Top-level colors for Tailwind gradient via- support
        cyan: "#06B6D4",
        purple: "#A855F7",
        emerald: "#10B981",
        text: "#E0E0E0",
        ctaHover: "#FBBF24",
        glass: {
          light: "rgba(255, 255, 255, 0.05)",
          medium: "rgba(255, 255, 255, 0.1)",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        heading: ["var(--font-orbitron)", "Montserrat", "sans-serif"],
        body: ["var(--font-inter)", "Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(245, 158, 11, 0.4)",
        "glow-lg": "0 0 40px rgba(245, 158, 11, 0.3)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.4)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.4)",
        neon: "0 0 5px rgba(245, 158, 11, 0.5), 0 0 20px rgba(245, 158, 11, 0.3), 0 0 40px rgba(245, 158, 11, 0.1)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
