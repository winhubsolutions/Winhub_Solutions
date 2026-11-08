import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF7120",
          hover: "#FF5E03",
          light: "#FFF4ED",
          dark: "#D65006",
          border: "rgba(255, 113, 32, 0.25)",
          glow: "rgba(255, 113, 32, 0.4)",
        },
        surface: {
          base: "#F6F6F4",
          subtle: "#EFEFEA",
          muted: "#E5E5DE",
          card: "#FFFFFF",
          border: "#E2E2DC",
          dark: "#0C0C0E",
          darkCard: "#141417",
          darkBorder: "#232328",
        },
        charcoal: {
          900: "#0A0A0A",
          800: "#141414",
          700: "#222222",
          600: "#444444",
          500: "#666666",
          400: "#8A8A8A",
          300: "#B0B0B0",
          200: "#D6D6D6",
          100: "#F0F0F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.15em",
        mega: "0.25em",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px)",
        "grid-pattern-dark": "radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
        "tech-grid": "linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
