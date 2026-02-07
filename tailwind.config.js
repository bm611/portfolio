/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', '"Space Grotesk"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        forest: {
          DEFAULT: '#2D4F1E',
          deep: '#1E3515',
          mist: '#3E6840',
        },
        beige: {
          DEFAULT: '#F5E6CC',
          soft: '#FFF5E4',
          muted: '#E6D6BC',
        },
        terracotta: {
          DEFAULT: '#E27D60',
          soft: '#F39D84',
          deep: '#C76449',
        },
        slate: {
          DEFAULT: '#4A4A4A',
          soft: '#686868',
          deep: '#2E2E2E',
        },
      },
      boxShadow: {
        earthy: '0 16px 35px rgba(6, 13, 6, 0.35)',
        lift: '0 22px 48px rgba(7, 15, 7, 0.42)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-14px,0) scale(1.02)' },
        },
        drift: {
          '0%': { transform: 'translateX(-4%) translateY(0%)' },
          '50%': { transform: 'translateX(3%) translateY(-2%)' },
          '100%': { transform: 'translateX(-4%) translateY(0%)' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
