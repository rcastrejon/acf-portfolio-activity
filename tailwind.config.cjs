const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: colors.stone["100"],
        foreground: colors.stone["950"],
        "muted-foreground": colors.stone["400"],
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Kaisei Decol", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
