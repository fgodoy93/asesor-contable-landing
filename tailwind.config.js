/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFB',
          100: '#FAF7F4',
          200: '#F2ECE6',
          300: '#E5DDD4',
        },
        plum: {
          50: '#FDF4F7',
          100: '#FCE8EF',
          200: '#F7D0DE',
          400: '#C2596F',
          500: '#A83F58',
          600: '#882B45',
          700: '#6B1F37',
          800: '#4A1D3D',
          900: '#2E1126',
          950: '#1E0B19',
        },
        champagne: {
          100: '#F8F1E3',
          200: '#EFE0C4',
          400: '#D4B07A',
          500: '#C59B5F',
          600: '#A67C42',
        },
        ink: {
          400: '#8C7A84',
          500: '#6E5C66',
          600: '#54434D',
          700: '#3B2D35',
          900: '#1E161B',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-14px) scale(1.03)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-slower': 'floatSlow 10s ease-in-out infinite reverse',
        'fade-up': 'fadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
