import plugin from 'tailwindcss/plugin'

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
})
