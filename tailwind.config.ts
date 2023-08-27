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
        'navbar': '#302f2d'
      },
      colors: {
        'active-them': '#9cd291',
        'navbar': '#302f2d'
      },
      borderColor: {
        'active-them': '#9cd291',
        'navbar': '#302f2d'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'iranSans': 'iranSans'
      }
    },
  },
  plugins: [],
}
export default config
