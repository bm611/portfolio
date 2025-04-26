/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'neon': '#B4FE3B',
        'dark': {
          900: '#090909',
          800: '#121212',
          700: '#1A1A1A',
          600: '#222222',
        },
        'light': {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E5E5E5',
          400: '#D4D4D4',
        },
        'success': {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
        'warning': {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        'error': {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};