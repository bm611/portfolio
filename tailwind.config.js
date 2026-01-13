/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'neon': '#CCFF00', // Acid Green / Cyber Lime
        'primary-light': '#000000', // Black for light mode primary
        'primary-light-hover': '#333333', // Dark Gray hover
        'dark': {
          900: '#050505', // Obsidian / True Black
          800: '#0A0A0A',
          700: '#141414',
          600: '#1F1F1F',
        },
        'light': {
          100: '#FFFFFF',
          200: '#F0F0F0', // Concrete
          300: '#E5E5E5',
          400: '#D4D4D4',
          500: '#A3A3A3',
          600: '#737373',
          700: '#525252',
          800: '#404040',
          900: '#262626',
        },
        'alert': '#FF3333', // Alert Red
      },
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        '3xl': '0',
        'full': '0',
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