import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        default: ['Inter', 'sans-serif'],
      },
      colors: {
        woodsmoke: {
          100: '#cccccc',
          200: '#b3b3b3',
          300: '#999999',
          400: '#808080',
          500: '#666666',
          600: '#4d4d4d',
          700: '#353535',
          800: '#242424',
          900: '#0f0f0f',
        },
        primary: '#42B883',
        'primary-dark': '#3aa173',
        'primary-light': '#fef08a',
        secondary: '#1a1a1a',
        'secondary-soft': '#242424',
        'secondary-muted': '#2f2f2f',
        'secondary-light': '#3a3a3a',
        'text-main': 'hsl(0deg 0% 100% / 87%)',
        'text-muted': 'hsl(0deg 0% 92.16% / 60%)',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addBase }) => {
      addBase({
        ':root': {
          '--layout-horizontal-padding': '1rem',
          '--layout-vertical-padding': '1rem',
        },
      })

      addComponents({
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.text-base': {
          letterSpacing: '0.01em',
        },
      })
    }),
  ],
}
