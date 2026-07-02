/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warna Ninja Xpress Asli
        'ninja-red': '#E31E24',
        'ninja-red-dark': '#B71C1C',
        'ninja-red-light': '#FF3D00',
        'ninja-dark': '#1A1A2E',
        'ninja-gray': '#F5F5F5',
        'ninja-gray-dark': '#E0E0E0',
        'ninja-white': '#FFFFFF',
        'ninja-yellow': '#FFD700',
        'ninja-green': '#00C853',
        'ninja-blue': '#2196F3',
      },
    },
  },
  plugins: [],
}