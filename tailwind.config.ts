import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#004f80',
          mid: '#0066a6',
          light: '#0080cc',
        },
        sky: {
          DEFAULT: '#00aaee',
          light: '#38c5f5',
        },
        bg: {
          base: '#eef6ff',
          soft: '#e2eff9',
          pale: '#f5f9ff',
          white: '#ffffff',
        },
        text: {
          heading: '#0a1628',
          body: '#2d4a63',
          sub: '#4a7090',
          muted: '#7a9ab5',
        },
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92) translateY(14px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        glow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(0,79,128,0.4)' },
          '50%': { boxShadow: '0 0 48px rgba(0,170,238,0.55)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse2: {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
        fadeIn: 'fadeIn 0.4s ease forwards',
        scaleIn: 'scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards',
        glow: 'glow 2.8s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
