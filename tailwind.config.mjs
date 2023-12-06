/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "my-purple": "#9924F5",
        "my-yellow": "#DEF037",
        "muted-purple": "#7D579B",
        baige: "#A7B054",
        "dark-baige": "#6D7052",
      },
    },
  },
  plugins: [],
};
