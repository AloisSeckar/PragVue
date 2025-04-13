# PragVue

Website for Vue.js conference in Prague.

## Overview

This project is built using Nuxt 3 and leverages several modern tools and libraries, including Tailwind CSS, VueUse, and Nuxt Ignis. It provides a dynamic and visually appealing website for the PragVue conference, showcasing event details, speakers, sponsors, and more.

## Features

- **Dynamic Event Details**: Displays conference information, including date, location, and schedule.
- **Speaker Showcase**: Highlights speakers with their profiles, including photos, GitHub links, and descriptions.
- **Sponsor Section**: Showcases sponsors with logos and links.
- **Interactive Components**: Includes features like a swiper for speakers and a grid of technologies.
- **iCal Integration**: Allows users to download the event details as an `.ics` file for calendar integration.
- **Responsive Design**: Fully responsive layout using Tailwind CSS.
- **Localization**: Supports multiple languages using `nuxt-i18n`.

## nuxt-ignis

This project uses [Nuxt Ignis](https://github.com/AloisSeckar/nuxt-ignis) to simplify dependency management.

To make it run locally, you need to provide a `.env` file with the following settings:

```
# enable Tailwind CSS
NUXT_PUBLIC_IGNIS_TAILWIND=true

# enable nuxt-i18n
NUXT_PUBLIC_IGNIS_I18N_ENABLED=true
NUXT_PUBLIC_IGNIS_I18N_CONFIG="./i18n/i18n.config.ts"
```

## Project Structure

The project is organized into the following key directories:

### `/app`

Contains the main application logic and components:

- **`components/`**: Reusable Vue components, including:
  - `layout/`: Layout-specific components like `HeroSection`, `SponsorSection`, and `SpeakersSection`.
  - `ui/`: UI components like `UiHeading`, `UiImage`, and `UiSpeakerBox`.
  - `icon/`: Icon components like `IconPragueSilhouette`.
- **`composables/`**: Custom composables for managing data, such as `speakerList` and `icalGenerator`.
- **`config/`**: Configuration files, such as `eventDate.ts` for event metadata.
- **`layouts/`**: Layout templates, including the default layout.
- **`lib/`**: Utility functions, such as `cn` for class merging.
- **`pages/`**: Page components for routes like `/` and `/2024`.

### `/i18n`

Contains localization files and configurations for `nuxt-i18n`.

### `/public`

Static assets like images, icons, and fonts.

### `/nuxt.config.ts`

Nuxt configuration file for setting up modules, plugins, and runtime configurations.

### `/tailwind.config.ts`

Tailwind CSS configuration file for customizing the design system.

## Setup Instructions

### Prerequisites

- Node.js >= 18.12.0
- PNPM package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/pragvue.git
   cd pragvue
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Start the development server:

```bash
pnpm dev
```

### Build

Build the project for production:

```bash
pnpm build
```

### Preview

Preview the production build:

```bash
pnpm start
```

### Linting

To ensure code quality and consistency, the project includes a comprehensive linting script. Run the following command to check for linting issues:

```bash
pnpm lint
```

This script performs the following steps:

1. **Prettier**: Formats the codebase to ensure consistent styling.
   - Command: `pnpm prettier --log-level warn --write .`
2. **ESLint**: Lints the codebase and automatically fixes issues where possible.
   - Command: `pnpm eslint app --fix`
3. **Type Checking**: Uses `vue-tsc` to perform TypeScript type checking.
   - Command: `pnpm vue-tsc --noEmit`

Each step outputs a message upon completion:

- "Format has finished."
- "Linting has finished."
- "Type checking has finished."

If you want to fix linting issues automatically, you can rely on the `--fix` flag included in the script.

### Generate Static Files

To generate static files for deployment, run:

```bash
pnpm generate
```

## Dependencies

### Core Dependencies

- **Nuxt 3**: Framework for building Vue.js applications.
- **Tailwind CSS**: Utility-first CSS framework.
- **VueUse**: Collection of Vue.js composables.
- **Swiper**: Modern slider library.

### Dev Dependencies

- **Nuxt Ignis**: Simplifies dependency management.
- **Vue TSC**: TypeScript type-checking for Vue components.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
