import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      accent: 'var(--accent-color)',
      typography: 'var(--text-color)',
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },

      animation: {
        'move-r': 'move-right 60s linear infinite',
      },

      keyframes: {
        'move-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },

        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
