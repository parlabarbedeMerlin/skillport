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
        primary: "rgb(220, 121, 100)",
        secondary: "rgb(125, 122, 188)",
        tertiary: "rgb(231, 221, 201)",
        quaternary: "rgb(27, 25, 21)",
        quinary: "rgb(238, 233, 222)",
      },
      backgroundImage: {
        "noise": "url('https://arc.net/noise-light.png')",
      },
      spacing: {
        128: "500px",
      },
    },
  },
  plugins: [],
}
