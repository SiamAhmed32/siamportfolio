import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        paper: '#f7f5f0',
        line: '#202020',
        muted: '#a3a3a3',
        accent: '#ff4d00',
        accentDark: '#d43f00'
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['Impact', 'Arial Black', 'Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        glow: '0 0 80px rgba(255, 77, 0, 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
