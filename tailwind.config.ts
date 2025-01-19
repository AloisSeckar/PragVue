import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        default: ['Inter', 'sans-serif'],
      },
      colors: {
        'woodsmoke': {
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
        'vue': '#42B883',
        'vue-dark': '#3aa173',
      },
    },
  },
  plugins: [
    plugin(({
      addComponents,
    }) => {
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
