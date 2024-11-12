/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}', // Includes TypeScript files in /app directory
    './src/components/**/*.{ts,tsx}', // Includes TypeScript files in /components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
