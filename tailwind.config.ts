import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6F66D9",
        dark: "#010014",
        light: "#E6E6F5",
        gray: "#3F3E4E",
      },
    },
  },
  plugins: [],
} satisfies Config;
