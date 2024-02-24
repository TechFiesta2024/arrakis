/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "grid-pattern": "url('../../public/assets/GridBox.svg')",  
        "mockup": "url('../../public/assets/Mockup.svg')",
      },
    },
    fontFamily: {
      'anton': ['Anton', 'sans-serif'],
      'generalsans': ['GeneralSans', 'sans-serif'],
      'generalsans-semibold': ['GeneralSans-SemiBold', 'sans-serif'],
    },

    colors:
    {
      'black': '#010100',
      'red': '#FF002B',
      'yellowish': '#FEFAE0',
      'white': '#FFFFFF'
    }
  },
  plugins: [],
};
