/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        ink: '#0f0e17',
        accent: '#ff8906',
        muted: '#a7a9be',
        surface: '#1b1a22',
      },
      boxShadow: {
        glow: '0 0 50px rgba(255, 137, 6, 0.2)',
      },
      animation: {
        'float-slow': 'float 12s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-soft': 'pulseSoft 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '25%': { transform: 'translate3d(-4%, 2%, 0)' },
          '50%': { transform: 'translate3d(3%, -3%, 0)' },
          '75%': { transform: 'translate3d(-2%, 4%, 0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.35 },
          '50%': { opacity: 0.55 },
        },
      },
    },
  },
  plugins: [],
}
