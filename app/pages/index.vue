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

        <p class="text-base max-w-[72ch] text-center mx-auto mt-8">
          {{ $t('pages.home.speakers_info') }}
        </p>

        <!--  TODO: add speakers list  -->
      </LayoutContainerContent>
    </layoutcontainer>

    <LayoutContainer>
      <LayoutContainerContent>
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

        <!--  TODO: replace with NuxtImg  -->
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
    name: 'Daniel Roe',
    description: t('speakers.danielroe.short_description'),
    githubUsername: 'danielroe',
  },
  {
    name: 'Alexander Lichter',
    description: t('speakers.TheAlexLichter.short_description'),
    githubUsername: 'TheAlexLichter',
  },
  {
    name: 'Konstantin Bifert',
    description: t('speakers.kissu.short_description'),
    githubUsername: 'kissu',
  },
])
</script>
