<template>
  <LayoutContainer>
    <LayoutContainerContent>
      <UiHeading class="mb-12 text-vue-light sm:text-center">
        {{ $t('headings.sponsor') }}
      </UiHeading>

      <i18n-t
        scope="global"
        tag="p"
        keypath="pages.home.sponsors_info"
        class="mb-12 tracking-[0.01em] text-left sm:text-center mx-auto max-w-[64ch] text-balance"
      >
        <template #br>
          <br>
        </template>
      </i18n-t>

      <div class="flex flex-col gap-4 items-center justify-center">
        <UiButtonIcon icon="💶" href="mailto:info@pragvue.com" :label="$t('buttons.sponsor')" />
      </div>
    </LayoutContainerContent>

    <h3 class="mb-4 text-2xl text-center font-bold ">
      <UiPragVue :year="2025" />
      {{ $t('pages.home.sponsors_list') }}
    </h3>

    <div class="mb-12 pgv-sponsors-wrapper">
      <LayoutContainerContent class="!py-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pgv-sponsors">
        <UiSponsorBox
          v-for="sponsor in sponsors"
          :key="sponsor.to"
          :to="sponsor.to"
          :image="sponsor.image"
          :title="sponsor.title"
          :alt="sponsor.alt"
          size="lg"
        />
      </LayoutContainerContent>

      <LayoutContainerContent class="!py-0 pgv-sponsors tracking-[0.01em] min-[430px]:text-lg min-[500px]:text-xl min-[600px]:text-2xl">
        <UiSponsorBox
          size="lg"
        >
          <span class="pgv-sponsors__prompt text-woodsmoke-100">
            {{ $t('pages.home.your_company_can_be_here') }}
          </span>
        </UiSponsorBox>
      </LayoutContainerContent>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
import { sponsors } from '~/data/sponsors-2025'
</script>

<style>
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
}

.pgv-sponsors__prompt::before {
  content: '{{ ';
  color: #4d4d4d;
}

.pgv-sponsors__prompt::after {
  content: ' }}';
  color: #4d4d4d;
}
</style>
