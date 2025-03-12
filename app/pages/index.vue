<template>
  <div>
    <HeroBanner />

    <LayoutContainer class="overflow-hidden">
      <LayoutContainerContent class="grid lg:grid-cols-2">
        <div>
          <UiHeading class="mb-6 text-vue-light">
            {{ $t('headings.about_the_conference') }}
          </UiHeading>

          <p class="text-base max-w-[64ch] mb-4 text-center min-[450px]:text-left">
            {{ $t('pages.home.conference_info_1') }}
          </p>

          <p class="text-base max-w-[64ch] text-center min-[450px]:text-left">
            {{ $t('pages.home.conference_info_2') }}
          </p>
        </div>

        <div class="h-[275px] sm:h-[400px] lg:h-[600px] relative max-lg:flex justify-center">
          <HeroSectionTechnologies class="absolute sm:top-[-4rem] lg:top-[4rem] lg:left-0 2xl:left-[2rem]" />
        </div>
      </LayoutContainerContent>

      <LayoutContainerContent>
        <div class="flex flex-col items-center">
          <UiHeading class="mb-6 text-vue">
            {{ $t('headings.tickets') }}
          </UiHeading>

          <div class="text-2xl font-bold text-center mb-4" inline>
            {{ $t('pages.home.early_bird_tickets') }}
          </div>

          <span class="pgv-price pgv-price--full">
            €249
          </span>

          <span class="pgv-price relative -top-2">
            €199
          </span>
        </div>

        <div class="mt-6 flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon icon="🎫" :href="tickets" :label="$t('buttons.tickets_2')" />

          <p class="mb-8 max-w-[24ch] text-center text-balance text-woodsmoke-300 text-sm">
            {{ $t('pages.home.early_bird_tickets_info') }}
          </p>
        </div>
      </LayoutContainerContent>
    </LayoutContainer>

    <a name="speakers" />
    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6 text-vue-light">
          {{ $t('headings.the_speakers') }}
        </UiHeading>

        <UiSwiper class="py-12" :slides="speakers">
          <template #slide="{ slide }">
            <UiSpeakerBox
              :name="slide.name"
              :description="slide.description"
              :img="{ githubUsername: slide.githubUsername }"
            />
          </template>
        </UiSwiper>

        <p class="text base max-w-[72ch] text-center text-balance mx-auto text-xl italic text-woodsmoke-400 mb-12 pgv-html-comment">
          {{ $t('pages.home.info_about_schedule_coming_soon') }}
        </p>

        <p class="text-base max-w-[72ch] text-center text-balance mx-auto mt-8">
          {{ $t('pages.home.speakers_info') }}
        </p>
        <h3 class="text-xl text-center font-bold mt-12">
          {{ $t('pages.home.speakers_you') }} 👀
        </h3>
        <p class="text-base max-w-[72ch] text-center text-balance mx-auto mt-8">
          {{ $t('pages.home.speakers_you_info') }}
        </p>

        <div class="mt-6 flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon icon="🎤" href="mailto:alois.seckar@eviden.com" :label="$t('buttons.speaker')" />
        </div>
      </LayoutContainerContent>
    </layoutcontainer>

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-12 text-vue">
          {{ $t('headings.look_back_on_2024') }}
        </UiHeading>

        <i18n-t
          tag="p"
          scope="global"
          keypath="pages.home.look_back_on_2024"
          class="text-base max-w-[128ch] text-center text-balance"
        />

        <NuxtLink to="/2024">
          <UiImage
            class="w-auto aspect-[1200/971] max-h-[330px] mx-auto mt-12"
            fit="contain"
            src="/pragvue2024.webp"
            :title="$t('pages.home.link_2024')"
            :alt="$t('accessibility.photo_of_the_speakers_from_2024')"
          />
        </NuxtLink>
      </LayoutContainerContent>
    </LayoutContainer>

    <!--    <LayoutContainer> -->
    <!--      <LayoutContainerContent> -->
    <!--        <UiHeading class="mb-6"> -->
    <!--          The schedule -->
    <!--        </UiHeading> -->
    <!--      </LayoutContainerContent> -->
    <!--    </LayoutContainer> -->

    <!--    <LayoutContainer> -->
    <!--      <LayoutContainerContent> -->
    <!--        <UiHeading class="mb-6"> -->
    <!--          Get your ticket -->
    <!--        </UiHeading> -->
    <!--      </LayoutContainerContent> -->
    <!--    </LayoutContainer> -->

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-12 text-vue-light sm:text-center">
          {{ $t('headings.sponsor') }}
        </UiHeading>

        <i18n-t
          scope="global"
          tag="p"
          keypath="pages.home.sponsors_info"
          class="text-base text-center mx-auto max-w-[64ch] text-balance mt-8"
        >
          <template #br>
            <br>
          </template>
        </i18n-t>

        <div class="mt-12 flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon icon="💶" href="mailto:alois.seckar@eviden.com" :label="$t('buttons.sponsor')" />
        </div>
      </LayoutContainerContent>

      <div class="mb-12 pgv-sponsors-wrapper">
        <LayoutContainerContent v-for="(group, index) in sponsors" :key="index" class="!py-0 pgv-sponsors">
          <UiSponsorBox
            v-for="sponsor in group"
            :key="sponsor.to"
            :to="sponsor.to"
            :image="sponsor.image"
            :title="sponsor.title"
            :alt="sponsor.alt"
            size="lg"
          />
        </LayoutContainerContent>

        <LayoutContainerContent class="!py-0 pgv-sponsors text-base min-[430px]:text-lg min-[500px]:text-xl min-[600px]:text-2xl">
          <UiSponsorBox
            size="lg"
          >
            <span class="pgv-sponsors__prompt">
              {{ $t('pages.home.your_company_can_be_here') }}
            </span>
          </UiSponsorBox>
        </LayoutContainerContent>
      </div>
    </LayoutContainer>
  </div>
</template>

<script setup lang="ts">
// TODO change to actual link for 2025

const tickets = 'https://pragvue.konference.cz/'

const { t } = useI18n()

const speakers = computed(() => [
  {
    name: 'Konstantin Bifert',
    description: t('speakers.kissu.short_description'),
    githubUsername: 'kissu',
  },
  {
    name: 'Jakub Andrzejewski',
    description: t('speakers.Baroshem.short_description'),
    githubUsername: 'Baroshem',
  },
  {
    name: 'Juan Andrés Núñez',
    description: t('speakers.juanwmedia.short_description'),
    githubUsername: 'juanwmedia',
  },
  {
    name: 'Alois Sečkár',
    description: t('speakers.AloisSeckar.short_description'),
    githubUsername: 'AloisSeckar',
  },
])

const sponsors = computed(() => {
  return [
    [
      {
        to: 'https://www.evidencz.com/',
        image: 'eviden',
        title: 'Eviden Czech Republic',
        alt: 'Eviden logo',
      },
      {
        to: 'https://www.exponet.cz/',
        image: 'exponet',
        title: 'Exponet - Your Event Manager',
        alt: 'Exponet logo',
      },
    ],
  ]
})
</script>

<style>
.pgv-price {
  font-size: 3.5rem;
  font-weight: 800;
  color: theme('colors.vue-light');
}

.pgv-price--full {
  font-size: 2.5rem;
  text-decoration: line-through;
  color: theme('colors.woodsmoke.400');
  font-weight: 500;
}

.pgv-sponsors-wrapper {
  --gap: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.pgv-sponsors {
  display: grid;
  gap: var(--gap);
  width: 100%;
}

.pgv-sponsors:first-child {
  grid-template-columns: repeat(2, 1fr);
}

.pgv-sponsors__prompt {
  /* font-size: 1.5rem; */
  font-weight: 500;
  color: theme('colors.woodsmoke.400');
}

.pgv-sponsors__prompt::before {
  content: '{{ ';
  color: theme('colors.woodsmoke.600');
  /* font-size: 1.75rem; */
}

.pgv-sponsors__prompt::after {
  content: ' }}';
  color: theme('colors.woodsmoke.600');
  /* font-size: 1.75rem; */
}
</style>
