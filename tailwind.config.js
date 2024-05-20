const { My_Soul } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      wordwrap: {
        "word-wrap": "break-word",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        new: {
          50: "#f1eff8",
          100: "#d5ceea",
          200: "#b9aedc",
          300: "#9e8ece",
          400: "#826ec0",
          500: "#664db2",
          600: "#533f91",
          700: "#413171",
          800: "#2e2351",
          900: "#1c1530",
          950: "#090710",
        },
        purpleGrape: {
          50: "#f1e8ff",
          100: "#d5b9ff",
          200: "#b98bff",
          300: "#9d5dff",
          400: "#812eff",
          500: "#6500ff",
          600: "#5300d1",
          700: "#4000a2",
          800: "#2e0074",
          900: "#1c0046",
          950: "#060010",
        },
        // STACK
        bootstrap: "#6f42c1",
        react: "#1399c4",
        sass: "#cf649a",
        js: "#f0db4f",
        jquery: "#78cff5",
        php: "#7a86b8",
        html: "#e34c26",
        css: "#264de4",
        mysql: "#00758f",
        tailwind: "#06b6d4",
        figma: "#a259ff",
        mysql: "#f29111",
        // SOCIAL
        linkedin: "#77b5f3",
        github: "#cfd4da",
        behance: "#086eff",
        twitter: "#bfbfbf",
        discord: "#7289da",
        youtube: "#ff0000",
        instagram: "#e1306c",
        whatsapp: "#25d366",
        facebook: "#1877f2",
        portfolio: "#a259ff",
        gmail: "#dd4b39",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
