import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'active-them': '#9cd291',
        'active-them-dark': '#6d9265',
        navbar: '#302f2d',
        background: '#13181c',
      },
      colors: {
        light: {
          text: '--text-light',
          background: '--background-light',
        },
        dark: {
          text: '--text-dark',
          background: '--background-dark',
        },
        'active-them': '#9cd291',
        navbar: '#302f2d',
        background: '#13181c',
      },
      borderColor: {
        'active-them': '#9cd291',
        navbar: '#302f2d',
        background: '#13181c',
      },
      fontFamily: {
        iranSans: 'iranSans',
      },
    },
  },
  plugins: [],
}
export default config
