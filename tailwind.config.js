/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mochi: {
          50: "#fef7f0",
          100: "#feeee1",
          200: "#fcdcc3",
          300: "#f9c59e",
          400: "#f5a477",
          500: "#f18b56",
          600: "#e2663d",
          700: "#bc4f32",
          800: "#96412f",
          900: "#7a3829",
        },
        calm: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // Support for bg-background and text-foreground
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class", // Enables class-based dark mode
  plugins: [],
};
