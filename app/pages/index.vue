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

const speakers = computed(() => [
  {
    name: 'Alex Lichter',
    country: 'NED',
    github: 'TheAlexLichter',
  },
  {
    name: 'Jakub Andrzejewski',
    country: 'POL',
    github: 'Baroshem',
  },
  {
    name: 'Louëlla Creemers',
    country: 'NED',
    github: 'LouellaCreemers',
  },
  {
    name: 'Julien Huang',
    country: 'FRA',
    github: 'huang-julien',
  },
  {
    name: 'Adam Berecz',
    country: 'HUN',
    github: 'adamberecz',
  },
  {
    name: 'Anastasiia Zvenigorodskaia',
    country: 'ESP',
    github: 'zvenigorodskaia',
  },
  {
    name: 'Raí Siqueira',
    country: 'BRA',
    github: 'raisiqueira',
  },
  {
    name: 'Alvaro Saburido Rodriguez',
    country: 'ESP',
    github: 'alvarosabu',
  },
  {
    name: 'Thorsten Seyschab',
    country: 'GER',
    github: 'toddeTV',
  },
  {
    name: 'Konstantin Bifert',
    country: 'NED',
    github: 'kissu',
  },
  {
    name: 'Juan Andrés Núñez',
    country: 'ESP',
    github: 'juanwmedia',
  },
  {
    name: 'Alexander Opalic',
    country: 'GER',
    github: 'alexanderop',
  },
  {
    name: 'Alois Sečkár',
    country: 'CZE',
    github: 'AloisSeckar',
  },
])

const sponsors = computed(() => {
  return [
    [
      {
        to: 'https://www.evidencz.com/',
        image: 'atos',
        title: 'Atos Czech Republic',
        alt: 'Atos logo',
      },
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
