import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(180, 66%, 49%)",
        "primary-dark-violet": "hsl(257, 27%, 26%)",
        "secondary-red": "hsl(0, 87%, 67%)",
        "neutral-gray": "hsl(0, 0%, 75%)",
        "neutral-grayish-violet": "hsl(257, 7%, 63%)",
        "neutral-very-dark-blue": "hsl(255, 11%, 22%)",
        "neutral-very-dark-violet": "hsl(260, 8%, 14%)",
      }
    },
  },
  plugins: [],
}
export default config
