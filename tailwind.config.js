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
        canvas: '#F7F4EE',
        paper: {
          DEFAULT: '#FFFFFF',
          soft: '#FBF9F4',
        },
        ink: {
          DEFAULT: '#23241F',
          soft: '#55544C',
          muted: '#7A776D',
        },
        hairline: {
          DEFAULT: '#E8E3D9',
          strong: '#DCD6C9',
        },
        forest: {
          DEFAULT: '#2D4F1E',
          deep: '#1E3515',
          pale: '#EDF2E6',
        },
        terracotta: {
          DEFAULT: '#C4683F',
          pale: '#F7ECE6',
        },
      },
    },
  },
  plugins: [],
};
