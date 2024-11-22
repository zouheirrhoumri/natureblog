import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          accent: 'var(--accent)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1a1a1a',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--accent)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;