/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{astro,tsx,html,md,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
