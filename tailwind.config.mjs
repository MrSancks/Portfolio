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
        background: '#ffffff',
        foreground: '#111111',
        // Paleta dark
        darkbg: '#18181b',
        darkfg: '#f4f4f5',
        primary: '#2563eb',
        secondary: '#64748b',
      },
    },
  },
  plugins: [],
};
