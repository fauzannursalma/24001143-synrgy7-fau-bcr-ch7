/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/.js",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#000000",
      lavender: "#f1f3ff",
      darkblue: "#0d28a6",
      limegreen: "#5CB85F",
      neutral: {
        "01": "#ffffff",
        "02": "#D0D0D0",
        "03": "#8A8A8A",
        "04": "#3C3C3C",
        "05": "#151515",
      },
      alert: {
        danger: "#FA2C5A",
        warning: "#F9CC00",
        success: "#5CB85F",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", flowbitePlugin],
};
