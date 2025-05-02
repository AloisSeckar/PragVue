<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading>
        {{ $t('headings.sponsor') }}
      </UiHeading>

      <p class="text-balance sm:text-lg">
        {{ $t('pages.home.sponsors_info') }}
      </p>

      <UiLink to="mailto:alois.seckar@eviden.com" class="mt-6">
        {{ $t('buttons.sponsor') }}
        <template #suffix>
          <IconNuxtIcon name="mail" :size="{ base: 'sm' }" />
        </template>
      </UiLink>
    </LayoutContainerContent>

    <LayoutContainerContent>
      <div class="w-full text-center flex flex-col gap-2">
        <NuxtLink to="/2024">
          <TheLogo tag="p" :year="2024" />
        </NuxtLink>
        <span class="sm:text-lg">{{ $t('pages.home.sponsors_list') }}</span>
      </div>
      <div class="grid grid-cols-2 w-full gap-2">
        <div
          v-for="(sponsor, index) in sponsors"
          :key="index"
          class="flex items-center justify-center bg-secondary-soft h-16"
          :aria-label="sponsor.title"
        >
          <NuxtLink
            :to="sponsor.to"
            class="w-full h-full flex flex-col justify-center items-center py-4"
          >
            <img
              v-if="sponsor.image"
              :src="`/${sponsor.image}.webp`"
              :alt="sponsor.alt"
              :width="80"
              :height="33"
              loading="lazy"
            />
          </NuxtLink>
        </div>
        <div
          class="text-sm sm:text-lg text-text-muted h-16 bg-secondary-soft flex justify-center items-center"
        >
          <span>&#123;&#123;&nbsp;</span>
          {{ $t('pages.home.your_company_can_be_here') }}
          <span>&nbsp;&#125;&#125;</span>
        </div>
      </div>
    </LayoutContainerContent>
  </LayoutContainer>
</template>

<script setup lang="ts">
const { sponsors } = useSponsorList()
</script>
