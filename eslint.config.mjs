import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 4,
      },
      multiline: {
        max: 4,
      },
    }],
  },
})
