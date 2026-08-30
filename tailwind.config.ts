import type { Config } from 'tailwindcss'
import { defaultTheme } from './src/styles/themes/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: defaultTheme.breakpoints,
    extend: {
      colors: defaultTheme.colors,
      fontFamily: {
        sans: ['var(--font-source-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
