const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bgimage":"url('/Vector.svg')",
        "contactbgimage":"url('/bgimg.svg')",
        "mobilecontactbgimg":"url('/Group 346.svg' )",
        "tabcontactbgimg":"url('/Group 364 (1).svg' )",
        "2xlcontactbgimg":"url('/Vector (8).svg' )",
        "herobgimg":"url('/Vector 10 (1).svg' )",
        "2xlherobgimg":"url('/Vector 10 (2).svg' )",
        "smherobgimg":"url('/Vector 10 (3).svg' )",
      },
      
    },
  },
  plugins: [addVariablesForColors],
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
