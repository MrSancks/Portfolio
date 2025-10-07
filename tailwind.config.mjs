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
        background: '#0f172a',
        foreground: '#e2e8f0',
        // Paleta dark
        darkbg: '#020817',
        darkfg: '#f8fafc',
        primary: '#38bdf8',
        secondary: '#6366f1',
      },
    },
  },
  plugins: [],
};
