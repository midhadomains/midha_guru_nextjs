/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bgimage":"url('/Vector.svg')",
        "contactbgimage":"url('/bgimg.svg')",
        "mobilecontactbgimg":"url('/Group 346.svg' )",
        "tabcontactbgimg":"url('/Group 364.svg' )",
        "2xlcontactbgimg":"url('/Vector (8).svg' )",
      },
    },
  },
  plugins: [],
};
