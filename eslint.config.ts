import pluginVue from 'eslint-plugin-vue'
import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import prettier from 'eslint-config-prettier'
import type { Linter } from 'eslint'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  ...pluginVue.configs['flat/recommended'],
  ...vuejsAccessibility.configs['flat/recommended'],
  prettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        extraFileExtensions: ['.vue'],
        project: ['./.nuxt/tsconfig.json'],
      },
      sourceType: 'module',
    },
  },

  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 4,
          },
          multiline: {
            max: 4,
          },
        },
      ],
    },
  },
] satisfies Linter.Config[])
