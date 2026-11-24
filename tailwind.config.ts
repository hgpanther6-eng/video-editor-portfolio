import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        "warm-white":     "#f5f3ef",
        "warm-white-alt": "#ede9e3",
        charcoal: {
          DEFAULT: "#1a1a18",
          mid:     "#2e2e2b",
          light:   "#4a4a46",
          muted:   "#6b6b66",
        },
        accent: {
          DEFAULT: "#c8a96e",
          dark:    "#a8893e",
          light:   "#e8d4a8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
