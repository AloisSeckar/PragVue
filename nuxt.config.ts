// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: [
    'nuxt-ignis',
  ],

  devtools: {
    enabled: false,
  },

  css: ['~/assets/ignis.css'],

  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    prerender: {
      routes: ['/2024'],
    },
  },

  vite: {
    // TEMPORARY FIX https://github.com/tailwindlabs/tailwindcss/discussions/16119
    // (will be moved into nuxt-ignis or eventually removed when tailwindcss is fixed)
    plugins: [
      {
        name: 'vite-plugin-ignore-sourcemap-warnings',
        apply: 'build',
        configResolved(config) {
          config.build.rollupOptions.onwarn = (warning, warn) => {
            if (
              warning.code === 'SOURCEMAP_BROKEN'
              && warning.plugin === '@tailwindcss/vite:generate:build'
            ) {
              return
            }

            warn(warning)
          }
        },
      },
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    lazy: true,
    defaultLocale: 'en',
    types: 'composition',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en.json',
      },
    ],
    experimental: {
      typedOptionsAndMessages: 'default',
    },
    compilation: {
      strictMessage: false,
    },
  },

  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-DGF1H9DLEK',
      },
      googleTagManager: {
        id: 'GTM-54QNGDB7',
      },
    },
  },

  security: {
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        'img-src': ['\'self\'', 'www.facebook.com', 'github.com', 'avatars.githubusercontent.com', 'www.hotel-grandium.cz'],
        'script-src': false,
      },
    },
  },

})
