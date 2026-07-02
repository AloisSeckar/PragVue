// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: [
    'nuxt-ignis',
  ],

  devtools: {
    enabled: false,
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-light.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-light.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-dark.png',
          media: '(prefers-color-scheme: dark)',
        },
      ],
    },
  },

  css: ['~/assets/ignis.css'],

  nitro: {
    prerender: {
      routes: ['/2024', '/2025'],
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
    // lazy: true,
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

  ignis: {
    config: {
      html: {
        lang: 'en',
      },
    },
    default: {
      css: false,
      auth: false,
    },
    preset: {
      ui: 'nuxt-ui',
      db: 'neon',
    },
    content: {
      i18n: {
        enabled: true,
      },
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
