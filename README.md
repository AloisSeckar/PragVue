# PragVue

Website for the annual Vue.js conference in Prague

<http://pragvue.com>

## Attributions

- [**Matej Černý**](https://github.com/cernymatej) for giving the page the great design fundamentals
- [**David Haz**](https://github.com/DavidHDev) for creating and maitaining [Vue Bits](https://vue-bits.dev/)
- **GitHub Copilot** for being by helping hand in 2026

## Configuration

This project uses [Nuxt Ignis](https://nuxt-ignis.com/) to simplify dependency management. Right now, all of its configuration is [inlined in `nuxt.config.ts`](https://nuxt-ignis.com/2-1-configuration.html). So you can just fork the project, clone the sources, run install command and you're good to go.

However, because we also use [nuxt-neon](https://nuxt-neon.netlify.app/) for database connection (to store Newsletter subscription emails), for correct functionality is required to provide `.env` file with expected [configuration](https://github.com/AloisSeckar/PragVue/blob/main/.env.example). Contact **alois.seckar [at] gmail.com** if you don't have / want to create your own Neon account.
