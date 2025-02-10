<template>
  <div>
    <HeroBanner />

    <a name="more" />
    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6 text-vue">
          {{ $t('headings.about_the_conference') }}
        </UiHeading>

        <p class="text-base max-w-[64ch] mb-4 text-balance">
          {{ $t('pages.home.conference_info_1') }}
        </p>

        <p class="text-base max-w-[64ch] text-balance">
          {{ $t('pages.home.conference_info_2') }}
        </p>

        <UiImage
          class="w-auto aspect-[400/300] max-h-[250px] mx-auto my-6"
          fit="contain"
          src="/features.webp"
          alt="Meme image - discover Vue.js"
        />

        <p class="text-lg font-bold max-w-[64ch] text-center">
          {{ $t('pages.home.conference_info_tickets') }}
        </p>

        <p class="text-[42px] text-vue-light font-bold text-center mt-2 hover:cursor-pointer hover:animate-pulse">
          &euro;199
        </p>

        <div class="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <UiLinkButton :href="tickets" :caption="$t('buttons.tickets_2')" />
          <UiLinkButton href="#speakers" :caption="$t('buttons.more')" />
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

        <p class="text-base max-w-[72ch] text-balance mx-auto mt-8">
          {{ $t('pages.home.speakers_info') }}
        </p>
        <h3 class="text-xl text-center font-bold mt-12">
          {{ $t('pages.home.speakers_you') }} 👀
        </h3>
        <p class="text-base max-w-[72ch] text-balance mx-auto mt-8">
          {{ $t('pages.home.speakers_you_info') }}
        </p>

        <div class="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center">
          <UiLinkButton href="mailto:alois.seckar@eviden.com" :caption="$t('buttons.speaker')" />
          <UiLinkButton :href="tickets" :caption="$t('buttons.tickets_3')" />
        </div>
      </LayoutContainerContent>
    </layoutcontainer>

    <LayoutContainer>
      <LayoutContainerContent>
        <!--  TODO: add link to 2024 summary  -->

        <UiHeading class="mb-6 text-vue">
          {{ $t('headings.look_back_on_2024') }}
        </UiHeading>

        <i18n-t
          tag="p"
          scope="global"
          keypath="pages.home.look_back_on_2024"
          class="text-base max-w-[128ch] text-balanced"
        />

        <UiImage
          class="w-auto aspect-[1200/971] max-h-[500px] mx-auto mt-8 mb-12"
          fit="contain"
          src="/pragvue2024.webp"
          :alt="$t('accessibility.photo_of_the_speakers_from_2024')"
        />

        <div class="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <UiLinkButton :href="tickets" :caption="$t('buttons.tickets_4')" />
        </div>
      </LayoutContainerContent>
    </LayoutContainer>

    <!--    <LayoutContainer> -->
    <!--      <LayoutContainerContent> -->
    <!--        <UiHeading class="mb-6"> -->
    <!--          The schedule -->
    <!--        </UiHeading> -->
    <!--      </LayoutContainerContent> -->
    <!--    </LayoutContainer> -->

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6 text-vue-light">
          {{ $t('headings.sponsor') }}
        </UiHeading>

        <UiImage
          class="w-auto aspect-[300/200] max-h-[200px] mx-auto mt-8 mb-12"
          fit="contain"
          src="/sponsor.webp"
          alt="Become a PragueVue sponsor"
        />

        <p class="text-base max-w-[72ch] text-balance mx-auto mt-8">
          {{ $t('pages.home.sponsors_info') }}
        </p>

        <div class="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <UiLinkButton href="mailto:alois.seckar@eviden.com" :caption="$t('buttons.sponsor')" />
          <UiLinkButton :href="tickets" :caption="$t('buttons.tickets_1')" />
        </div>
      </LayoutContainerContent>
    </LayoutContainer>

    <!--    <LayoutContainer> -->
    <!--      <LayoutContainerContent> -->
    <!--        <UiHeading class="mb-6"> -->
    <!--          Get your ticket -->
    <!--        </UiHeading> -->
    <!--      </LayoutContainerContent> -->
    <!--    </LayoutContainer> -->
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
</script>
