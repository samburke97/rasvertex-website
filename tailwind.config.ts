import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bebas)", "Arial", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#1a0f5e",
          dark: "#0F172A",
        },
        red: {
          DEFAULT: "#DC2626",
          dark: "#991B1B",
        },
        cream: "#FBF7F0",
        "sky-gradient-from": "#e8f4f8",
        "sky-gradient-to": "#d4e7ed",
      },
    },
  },
  plugins: [],
} satisfies Config;
