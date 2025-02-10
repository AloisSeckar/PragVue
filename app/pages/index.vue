<template>
  <div>
    <HeroBanner />

    <a name="more" />
    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6">
          {{ $t('headings.about_the_conference') }}
        </UiHeading>

        <p class="text-base max-w-[64ch] mb-4 text-balance">
          {{ $t('pages.home.conference_info_1') }}
        </p>

        <p class="text-base max-w-[64ch] text-balance">
          {{ $t('pages.home.conference_info_2') }}
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

        <p class="text-base max-w-[72ch] text-balance mx-auto mt-8">
          {{ $t('pages.home.speakers_info') }}
        </p>
        <h3 class="text-xl text-center font-bold mt-12">
          {{ $t('pages.home.speakers_you') }} 👀
        </h3>
        <p class="text-base max-w-[72ch] text-balance mx-auto mt-8">
          {{ $t('pages.home.speakers_you_info') }}
        </p>
        <div class="mt-6 text-center">
          <UiLinkButton href="mailto:alois.seckar@eviden.com" :caption="$t('pages.home.speakers_you_button') + ' 📢'" />
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
          class="text-base max-w-[128ch] text-balanced"
        />

        <UiImage
          class="w-auto aspect-[1200/971] max-h-[500px] mx-auto mt-8 mb-12"
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

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6">
          Become a sponsor
        </UiHeading>

        <UiImage
          class="w-auto aspect-[300/200] max-h-[200px] mx-auto mt-8 mb-12"
          fit="contain"
          src="/sponsor.webp"
          alt="Become a PragueVue sponsor"
        />

        <p class="text-base max-w-[72ch] text-balance mx-auto mt-8">
          Gain valuable exposure, connect with a passionate audience of developers, and help us shape the future of Vue.js by sponsoring PragVue. Seize this chance to connect with talented developers,share your vision, and shine a spotlight on your brand. Contact us for sponsorship options.
        </p>

        <div class="mt-6 text-center">
          <UiLinkButton href="mailto:alois.seckar@eviden.com" caption="Ask about PragVue sponsorship 💶" />
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
