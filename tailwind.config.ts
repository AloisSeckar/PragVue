import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  theme: {
    extend: {
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
        vue: '#42B883',
      },
    },
  },
  plugins: [
    plugin(({
      addComponents,
      theme,
    }) => {
      addComponents({
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.text-base': {
          fontSize: '1rem',
          lineHeight: '1.3',
          letterSpacing: '0.01em',
        }
      })
    }),
  ],
}
