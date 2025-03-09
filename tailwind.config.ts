import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4B2B',
          dark: '#CC3A22',
        },
        secondary: {
          DEFAULT: '#FF8F6B',
          dark: '#CC7256',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          lighter: '#2A2A2A',
          light: '#333333',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF4B2B 0%, #FF8F6B 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
      },
    },
  },
  plugins: [],
}

export default config 