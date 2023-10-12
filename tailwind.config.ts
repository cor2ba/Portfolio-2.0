import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "xxs": {"max": "320px"},
        "xs": {"max": "350px"},
        "s": {"max": "400px"},
        "l": {"max": "450px"},
        "m": {"max": "560px"},
        "xl": {"max": "1055px"}
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
export default config
