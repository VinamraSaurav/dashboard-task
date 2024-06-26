import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  images: {
    unoptimized: true,
  },
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        "text-secondary": "var(--text-secondary)",
        "border-primary": "var(--border-primary)",
        "bg-primary": "var(--bg-primary)",
        "utility-success-700": "var(--utility-success-700)",
        "utility-success-500": "var(--utility-success-500)",
        "utility-success-200": "var(--utility-success-200)",
        "utility-success-50": "var(--utility-success-50)",
        "neutral-grey-1": "var(--neutral-grey-1)",
        "neutral-grey-2": "var(--neutral-grey-2)",
        "neutral-grey-3": "var(--neutral-grey-3)",
        "neutral-grey-4": "var(--neutral-grey-4)",
        "orange-150": "var(--orange-150)",
        "orange-50": "var(--orange-50)",
        "orange-300": "var(--orange-300)",
        "text-1": "var(--text-1)",
        "text-2": "var(--text-2)",
        "text-3": "var(--text-3)",
        "text-5": "var(--text-5)",
        "right-control": "var(--bg-right-control)",
        "nav-border-click" : "var(--nav-border-click)",
      },
      fontFamily: {
        generalsans: ["var(--font-generalsans)", ...fontFamily.sans],
        satoshivariable: ["var(--font-satoshivariable)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
