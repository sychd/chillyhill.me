import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { default as defaultTailwindTheme } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: ({ theme }) => ({
        center: true,
        padding: {
          DEFAULT: theme('spacing.4')
        },
        screens: {
          lg: '1200px',
          xl: '1200px',
          '2xl': '1200px'
        }
      }),
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '80ch'
          }
        }
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTailwindTheme.fontFamily.sans],
        logo: ['Gruppo', 'sans-serif']
      },
      filter: {
        desaturate: 'grayscale(0.8)'
      },
      colors: {
        primary: '#3D768E',
        secondary: '#E6F0F4'
      }
    }
  },

  plugins: [typography]
} satisfies Config;