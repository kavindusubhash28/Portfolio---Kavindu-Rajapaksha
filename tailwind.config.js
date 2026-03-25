/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0A0A0A',
          800: '#0F0F0F',
          700: '#141414',
          600: '#1A1A1A',
          500: '#222222',
          400: '#2A2A2A',
          300: '#333333',
        },
        accent: {
          DEFAULT: '#FF7A00',
          light: '#FF9A33',
          dark: '#CC6200',
          glow: 'rgba(255, 122, 0, 0.15)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#AAAAAA',
          muted: '#666666',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'grid-move': 'gridMove 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 122, 0, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 122, 0, 0.4)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255, 122, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 122, 0, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
