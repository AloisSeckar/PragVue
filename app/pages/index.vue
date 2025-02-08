<template>
  <div>
    <HeroBanner />

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6">
          {{ $t('headings.about_the_conference') }}
        </UiHeading>

        <p class="text-base max-w-[64ch]">
          {{ $t('pages.home.conference_pitch') }}
        </p>
      </LayoutContainerContent>
    </LayoutContainer>

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6">
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

        <p class="text-base max-w-[72ch] text-center md:text-justify mx-auto mt-8">
          {{ $t('pages.home.speakers_info') }}
        </p>
        <h3 class="text-xl text-center font-bold mt-12">
          {{ $t('pages.home.speakers_you') }}
        </h3>
        <p class="text-base max-w-[72ch] text-center md:text-justify mx-auto mt-8">
          {{ $t('pages.home.speakers_you_info') }}
        </p>
        <div class="mt-6 text-center">
          <a href="mailto:alois.seckar@eviden.com">
            <button class="px-4 py-2 rounded border-2 border-vue font-bold hover:bg-gray-300 hover:text-black">
              {{ $t('pages.home.speakers_you_button') }}
            </button>
          </a>
        </div>
      </LayoutContainerContent>
    </layoutcontainer>

    <LayoutContainer>
      <LayoutContainerContent>
        <!--  TODO: add link to 2024 summary  -->

        <UiHeading class="mb-6">
          {{ $t('headings.look_back_on_2024') }}
        </UiHeading>

        <i18n-t
          tag="p"
          scope="global"
          keypath="pages.home.look_back_on_2024"
          class="text-base max-w-[64ch]"
        >
          <template #br>
            <br>
          </template>
        </i18n-t>

        <UiImage
          class="w-auto aspect-[1200/971] max-h-[750px] mx-auto my-16"
          fit="contain"
          src="/pragvue2024.webp"
          :alt="$t('accessibility.photo_of_the_speakers_from_2024')"
        />
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
    <!--          The sponsors -->
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
  </div>
</template>

<script setup lang="ts">
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
