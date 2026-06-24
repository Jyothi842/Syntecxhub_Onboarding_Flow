/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EEF0FF',
          100: '#E0E3FF',
          200: '#C7CBFF',
          300: '#A5A8FC',
          400: '#8184F8',
          500: '#4F46E5',
          600: '#4338CA',
          700: '#3730A3',
          800: '#312E81',
          900: '#1E1B4B',
        },
        secondary: {
          DEFAULT: '#9333EA',
          300: '#C084FC',
          400: '#A855F7',
          500: '#9333EA',
          600: '#7E22CE',
        },
        accent: {
          DEFAULT: '#06B6D4',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.15)',
        glow: '0 0 40px 0 rgba(79, 70, 229, 0.45)',
        'glow-pink': '0 0 40px 0 rgba(236, 72, 153, 0.4)',
        'glow-cyan': '0 0 40px 0 rgba(6, 182, 212, 0.4)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255,255,255,0.15), inset 0 -1px 1px 0 rgba(0,0,0,0.1)',
        'premium': '0 20px 60px -10px rgba(79, 70, 229, 0.4), 0 8px 24px -4px rgba(147, 51, 234, 0.3)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.88)' },
          '60%': { opacity: '1', transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(4deg)' },
        },
        'bell-ring': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(16deg)' },
          '20%, 40%': { transform: 'rotate(-16deg)' },
          '50%': { transform: 'rotate(0deg)' },
        },
        'check-pop': {
          '0%': { transform: 'scale(0) rotate(-45deg)', opacity: '0' },
          '60%': { transform: 'scale(1.3) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'mesh-shift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'confetti-fall': {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-150%) skewX(-15deg)' },
          '100%': { transform: 'translateX(250%) skewX(-15deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px 0 rgba(79, 70, 229, 0.4)' },
          '50%': { boxShadow: '0 0 45px 5px rgba(147, 51, 234, 0.6)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        'bar-fill': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--bar-width, 100%)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-3deg)' },
          '75%': { transform: 'rotate(3deg)' },
        },
        'rise-up': {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'glow-border': {
          '0%, 100%': { boxShadow: '0 0 12px 1px rgba(79, 70, 229, 0.4), inset 0 0 12px 1px rgba(255,255,255,0.1)' },
          '50%': { boxShadow: '0 0 24px 3px rgba(147, 51, 234, 0.6), inset 0 0 12px 1px rgba(255,255,255,0.15)' },
        },
        'float-particle': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '20%': { opacity: '0.8' },
          '80%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-80px) translateX(20px)', opacity: '0' },
        },
        'stat-pop': {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(10px)' },
          '60%': { opacity: '1', transform: 'scale(1.05) translateY(0)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'success-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 28px rgba(147, 51, 234, 0.7))' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'bell-ring': 'bell-ring 2.5s ease-in-out infinite',
        'check-pop': 'check-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'mesh-shift': 'mesh-shift 20s ease-in-out infinite',
        'confetti-fall': 'confetti-fall linear forwards',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
        'bounce-soft': 'bounce-soft 2.5s ease-in-out infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        orbit: 'orbit 12s linear infinite',
        'draw-line': 'draw-line 1.2s ease forwards',
        'bar-fill': 'bar-fill 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        wiggle: 'wiggle 0.5s ease-in-out',
        'rise-up': 'rise-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'glow-border': 'glow-border 2.5s ease-in-out infinite',
        'float-particle': 'float-particle 4s ease-in-out infinite',
        'stat-pop': 'stat-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'success-glow': 'success-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
