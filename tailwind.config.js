/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF9F6',
        sand: '#F2EFE9',
        obsidian: '#11161D',
        charcoal: '#1A222D',
        trustBlue: '#1E40AF',
        royalBlue: '#2563EB',
        emeraldTrust: '#059669',
        warmBronze: '#9A7B5C',
        slateInk: '#1E293B',
        mutedInk: '#475569'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(17, 22, 29, 0.08)',
        'elevated': '0 20px 40px -15px rgba(30, 64, 175, 0.14)',
      }
    },
  },
  plugins: [],
}
