import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#000",
        darkmagenta: "#871a99",
        shadeofpurple: "#C395D9",
        thistle: "#dec6ee",
        white: "#fff",
        darkslategray: "#323c47",
        "checkbox-empty": "#C395D9"
      },
      spacing: {},
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px"
      },
    },
    fontSize: {
      sm: "0.875rem",
      smi: "0.813rem",
      inherit: "inherit",
      l: "1.5rem"
    },
  },
  plugins: [],
};
export default config;
