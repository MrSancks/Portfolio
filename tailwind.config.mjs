/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta light
        background: '#090909',
        foreground: '#f4f4f5',
        // Paleta dark
        darkbg: '#050505',
        darkfg: '#f9fafb',
        primary: '#1f2937',
        secondary: '#4b5563',
      },
    },
  },
  plugins: [],
};
