import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse_button: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        }
      },
      animation: {
        pulse_slow: 'pulse_button 1.5s ease-in-out infinite',
        pulse_medium: 'pulse_button 1s ease-in-out infinite',
        pulse_fast: 'pulse_button 0.5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out 1',
      },
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
