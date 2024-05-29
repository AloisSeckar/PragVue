<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
    <SpeakerCard
      name="Daniel Roe" about="Open-source maintainer and founder, leader of the Nuxt core team"
      country="GBR" image="roe_d" link="https://roe.dev/"
    />
    <SpeakerCard
      name="Alexander Lichter" about="Web engineering consultant based in Amsterdam"
      country="GER" image="lichter_a" link="https://www.lichter.io/"
    />
    <SpeakerCard
      name="Konstantin Bifert" about="Frontend Developer ~ VueJS ecosystem lover"
      country="NED" image="bifert_k" link="https://kissu.io/"
    />
    <SpeakerCard
      name="Alois Sečkár" about="Application developer at Eviden, maintainer of https://cs.vuejs.org"
      country="CZE" image="seckar_a" link="https://alois-seckar.cz/"
    />
    <SpeakerCard
      name="...and more!" about="Other speakers will be revealed soon"
    />
  </div>
</template>
