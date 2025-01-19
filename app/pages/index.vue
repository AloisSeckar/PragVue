<template>
  <div>
    <HeroBanner />

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6">
          About the conference
        </UiHeading>

        <p class="text-base max-w-[64ch]">
          Vue.js is easy to learn, scalable, highly performant thanks to its coherent reactivity system, and has a rich ecosystem of surrounding libraries.
          Despite its greatness, Vue.js remains undiscovered by many.

          That's precisely why we're hosting this conference - to delve deeper into its potential and shed light on its remarkable capabilities.
        </p>
      </LayoutContainerContent>
    </LayoutContainer>

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6">
          The speakers
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
          These speakers will be joining us to share their insights, expertise, and real-world experiences. From seasoned Vue.js veterans to innovative leaders in web development, each speaker brings unique perspectives to help you level up your skills. Don’t miss the opportunity to learn from and connect with these industry experts!
        </p>

        <!--  TODO: add speakers list  -->
      </LayoutContainerContent>
    </layoutcontainer>

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6">
          A look back on 2024
        </UiHeading>

        <p class="text-base max-w-[64ch]">
          In 2024, we hosted the first Czech Vue.js conference.<br>
          Thank you to all the attendees and all the speakers. We’re hoping to make the next one even better!
        </p>

        <!--  TODO: replace with NuxtImg  -->
        <UiImage
          class="w-auto aspect-[1200/971] max-h-[750px] mx-auto my-16"
          fit="contain"
          src="/pragvue2024.webp"
          alt="A picture of the speakers from the 2024 conference"
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
const speakers = [
  {
    name: 'Daniel Roe',
    description: 'Head of Nuxt core team',
    githubUsername: 'danielroe',
  },
  {
    name: 'Alexander Lichter',
    description: 'Nuxt core team member',
    githubUsername: 'TheAlexLichter',
  },
  {
    name: 'Konstantin Bifert',
    description: 'Frontend developer',
    githubUsername: 'kissu',
  },
]
</script>
