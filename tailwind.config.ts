import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        darkRed: "hsl(var(--dark-red))",
        red: "hsl(var(--red))",
        grey: "hsl(var(--grey))",
        darkBlue: "hsl(var(--dark-blue))",
        blue: "hsl(var(--blue))",
        lightBlue: "hsl(var(--light-blue))",
        greyBlue: "hsl(var(grey-blue))"

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
