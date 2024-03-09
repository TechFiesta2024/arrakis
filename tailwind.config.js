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
        "mockup": "url('../../public/assets/mockup2.svg')",
        "map": "url('../../public/assets/Basemap.svg')",
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
      'red-faded': '#DD6D71',
      'yellowish': '#FEFAE0',
      'white': '#FFFFFF',
      'grey':'#ACACAC',
      'greenCheck': '#9ef01a',
      'greyish': '#727272',
      'yellowish28': 'rgba(254,250,224,28%)',
      'yellowishopc': 'rgba(254,250,224,21%)'
    }
  },
  plugins: [],
};
