/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          blue: "#1882FF",
          dark: "#080D1A",
          surface: "#0F172A",
          cibil: "#0284C7",
          crif: "#06B6D4",
          experian: "#2563EB",
          equifax: "#10B981",
        }
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
