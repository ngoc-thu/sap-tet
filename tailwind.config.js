/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tet: {
          red: '#D32F2F',
          darkRed: '#8B0000',
          crimson: '#C8102E',
          gold: '#FFD700',
          lightGold: '#FFF2B2',
          amber: '#F59E0B',
          bgDark: '#120507',
          bgCard: '#1E0A0F',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', '"Nunito"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cursive: ['"Charm"', 'cursive'],
        nunito: ['"Nunito"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        charm: ['"Charm"', 'cursive'],
        vietnam: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'sway': 'sway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.9))' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
