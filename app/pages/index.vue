<template>
  <div>
    <HeroBanner />

    <a id="info" />
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

        <div class="mb-8 h-[275px] sm:h-[400px] lg:h-[600px] relative max-lg:flex justify-center">
          <HeroSectionTechnologies class="absolute sm:top-[-4rem] lg:top-[4rem] lg:left-0 2xl:left-[2rem]" />
        </div>
      </LayoutContainerContent>

      <LayoutContainerContent>
        <div class="mb-6 flex flex-col items-center">
          <UiHeading class="mb-6 text-vue">
            {{ $t('headings.tickets') }}
          </UiHeading>

          <div class="text-2xl font-bold text-center mb-4 inline">
            {{ $t('pages.home.early_bird_tickets') }}
          </div>

          <span class="pgv-price pgv-price--full">
            €249
          </span>

          <span class="pgv-price relative -top-2">
            €199
          </span>
        </div>

        <div class="flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon icon="🎫" :href="tickets" :label="$t('buttons.tickets_2')" />

          <p class="mb-8 max-w-[24ch] text-center text-balance text-woodsmoke-300 text-sm">
            {{ $t('pages.home.early_bird_tickets_info') }}
          </p>
        </div>
      </LayoutContainerContent>
    </LayoutContainer>

    <a id="speakers" />
    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6 text-vue-light">
          {{ $t('headings.the_speakers') }}
        </UiHeading>

        <UiSwiper class="py-12" :slides="speakers">
          <template #slide="{ slide }">
            <UiSpeakerBox
              :name="slide.name"
              :country="slide.country"
              :github="slide.github"
            />
          </template>
        </UiSwiper>

        <p class="mb-12 text base max-w-[72ch] text-center text-balance mx-auto text-xl italic text-woodsmoke-400 pgv-html-comment">
          {{ $t('pages.home.info_about_schedule_coming_soon') }}
        </p>

        <p class="mb-6 mx-auto text-base max-w-[72ch] text-center text-balance">
          {{ $t('pages.home.speakers_info') }}
        </p>

        <!-- SPEAKER LIMIT REACHED 🤯
        <h3 class="mb-4 text-2xl text-center font-bold ">
          {{ $t('pages.home.speakers_you') }} 👀
        </h3>
        <p class="mb-8 text-base max-w-[72ch] text-center text-balance mx-auto">
          {{ $t('pages.home.speakers_you_info') }}
        </p>
        <div class="flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon icon="🎤" href="mailto:alois.seckar@eviden.com" :label="$t('buttons.speaker')" />
        </div>
        -->
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
          class="mb-12 text-base max-w-[128ch] text-center text-balance"
        />

        <NuxtLink to="/2024">
          <UiImage
            class="w-auto aspect-[1200/971] max-h-[330px] mx-auto"
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

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-6 text-vue-light">
          {{ $t('headings.venue') }}
        </UiHeading>

        <i18n-t
          tag="p"
          scope="global"
          keypath="pages.home.venue_info"
          class="mb-12 text-base max-w-[1150px] text-left text-balance"
        >
          <template #hotel>
            <NuxtLink to="https://www.hotel-grandium.cz/en/" class="text-vue hover:text-vue-light hover:cursor-pointer">
              Hotel Grandium
            </NuxtLink><span style="margin-left: -5px">,</span>
          </template>
        </i18n-t>

        <div class="flex flex-row gap-2 sm:gap-6">
          <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
            <NuxtImg
              class="mb-10 mx-auto w-auto max-h-[200px]"
              src="https://www.hotel-grandium.cz/files-sbbasic/ba_grandiumprague_cz/mars-jupiter-saturn-_banquet.jpg"
              :title="venueImages"
              :alt="venueImages"
            />
          </NuxtLink>
          <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
            <NuxtImg
              class="mb-10 mx-auto w-auto max-h-[200px]"
              src="https://www.hotel-grandium.cz/files-sbbasic/ba_grandiumprague_cz/jupiter_banquet.jpg"
              :title="venueImages"
              :alt="venueImages"
            />
          </NuxtLink>
          <NuxtLink to="https://www.hotel-grandium.cz/en/events-and-conferences/" class="cursor-pointer">
            <NuxtImg
              class="mb-10 mx-auto w-auto max-h-[200px]"
              fit="contain"
              src="https://www.hotel-grandium.cz/files-sbbasic/ba_grandiumprague_cz/gum_mercury_i._u-shape__2_.jpg"
              :title="venueImages"
              :alt="venueImages"
            />
          </NuxtLink>
        </div>

        <i18n-t
          tag="p"
          scope="global"
          keypath="pages.home.venue_offer"
          class="mb-12 text-base max-w-[1150px] text-left text-ballance"
        >
          <template #offer>
            <strong class="text-vue-light"> {{ $t('pages.home.venue_offer_highlight') }} </strong>
          </template>
          <template #hotel>
            <NuxtLink to="https://www.hotel-grandium.cz/en/" class="text-vue hover:text-vue-light hover:cursor-pointer">
              Hotel Grandium
            </NuxtLink>
          </template>
        </i18n-t>

        <div class="flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon icon="🏨" href="mailto:alois.seckar@eviden.com" :label="$t('buttons.hotel')" />
        </div>
      </LayoutContainerContent>
    </LayoutContainer>

    <LayoutContainer>
      <LayoutContainerContent>
        <UiHeading class="mb-12 text-vue sm:text-center">
          {{ $t('headings.sponsor') }}
        </UiHeading>

        <i18n-t
          scope="global"
          tag="p"
          keypath="pages.home.sponsors_info"
          class="mb-12 text-base text-center mx-auto max-w-[64ch] text-balance"
        >
          <template #br>
            <br>
          </template>
        </i18n-t>

        <div class="flex flex-col gap-4 items-center justify-center">
          <UiButtonIcon icon="💶" href="mailto:alois.seckar@eviden.com" :label="$t('buttons.sponsor')" />
        </div>
      </LayoutContainerContent>

      <h3 class="mb-4 text-2xl text-center font-bold ">
        <UiPragVue :year="2025" />
        {{ $t('pages.home.sponsors_list') }}
      </h3>

      <div class="mb-12 pgv-sponsors-wrapper">
        <LayoutContainerContent v-for="(group, index) in sponsors" :key="index" class="!py-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pgv-sponsors">
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

const venueImages = useT('pages.home.venue_images')
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
