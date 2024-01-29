/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        secondary: "hsl(var(--secondary))",
      },
    },
  },

  plugins: [],
};
