import type { Config } from 'tailwindcss'

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
          700: '#333333',
          800: '#242424',
          900: '#0f0f0f',
        },
        vue: '#42B883',
      },
    },
  },
}
