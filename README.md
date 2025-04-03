# PragVue
Website for Vue.js conference in Prague

## nuxt-ignis
This project uses [Nuxt Ignis](https://github.com/AloisSeckar/nuxt-ignis) to simplify dependency management.

To make it run locally, you need to provide `.env` file with following settings:

```
# enable Tailwind CSS
NUXT_PUBLIC_IGNIS_TAILWIND=true

# enable nuxt-i18n
NUXT_PUBLIC_IGNIS_I18N_ENABLED=true
NUXT_PUBLIC_IGNIS_I18N_CONFIG="./i18n/i18n.config.ts"
```
