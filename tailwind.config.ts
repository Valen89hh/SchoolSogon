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
    },
    colors: {
      primary: "#19C37D",
      secondary: "#1C77C3",
      "secondary-variant": "#0D1015",
      content: "#555555",
      "secondary-light": "#95A5A6", 
      "secondary-dark": "#555555", 
      "white": "#FFFFFF",
      "black": "#0D1015"
    

    },
    screens: {
      'xs': "480px",
      'sm': "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    }
  },
  plugins: [],
};
export default config;
