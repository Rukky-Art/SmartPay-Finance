/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef0fd',
          100: '#d9dcfb',
          200: '#b3bbf9',
          300: '#8089f0',
          400: '#5562e8',
          500: '#3545de',
          600: '#2a37ba',
          700: '#2230a0',
          800: '#1a2580',
          900: '#111960',
          950: '#0a1040',
        },
        accent: {
          400: '#f9c846',
          500: '#f5b700',
          600: '#d99e00',
        },
        dark: {
          900: '#040d14',
          800: '#071520',
          700: '#0a1e2e',
          600: '#0d2640',
        },
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-primary': 'radial-gradient(at 40% 20%, #1a3c8f 0px, transparent 50%), radial-gradient(at 80% 0%, #153174 0px, transparent 50%), radial-gradient(at 0% 50%, #060f28 0px, transparent 50%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
}
