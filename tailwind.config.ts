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
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "var(--navy)",
          dark: "var(--navy-dark)",
        },
        red: {
          DEFAULT: "var(--red)",
          dark: "var(--red-dark)",
        },
        cream: "var(--cream)",
      },
    },
  },
  plugins: [],
};

export default config;
