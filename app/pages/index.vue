<template>
  <div class="contents">
    <LayoutHeroSection />
    <LayoutAboutConferenceSection />
    <LayoutSpeakersSection />
    <LayoutLookBackOn2024Section />
    <LayoutSponsorSection />
    <!-- <LayoutScheduleSection /> -->
  </div>
</template>

<script setup lang="ts">
const tickets = 'https://pragvue.konference.cz/'
const { sponsors } = useSponsorList()
const { speakers } = useSpeakerList()
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
  gap: var(--gap);
  width: 100%;
}

.pgv-sponsors__prompt {
  font-weight: 500;
  color: theme('colors.woodsmoke.400');
}

.pgv-sponsors__prompt::before {
  content: '{{ ';
  color: theme('colors.woodsmoke.600');
}

.pgv-sponsors__prompt::after {
  content: ' }}';
  color: theme('colors.woodsmoke.600');
}
</style>
