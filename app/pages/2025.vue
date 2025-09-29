<template>
  <div>
    <HeroBanner />

    <a id="info" />
    <LazyConferenceInfo hydrate-on-visible />

    <!--
    <div class="flex flex-col gap-1 items-center">
      <div class="font-xs">
        Sponsor link
      </div>
      <div>
        <NuxtLink to="https://www.javadays.cz/" class="cursor-pointer">
          <NuxtImg
            class="mx-auto w-[165px] h-[110px]"
            src="/java-days-banner.jpg" loading="lazy"
            title="JavaDays - největší česko-slovenská konference pro Java vývojáře" alt="Sponsor - Java Days conference"
          />
        </NuxtLink>
      </div>
      <div class="font-xs">
        -----
      </div>
    </div>
    -->

    <a id="speakers" />
    <LazyConferenceSpeakers hydrate-on-visible />

    <!-- <LazyConferencePast hydrate-on-visible /> -->

    <LazyConferenceVenue hydrate-on-visible />

    <LazyConferencePrague hydrate-on-visible />

    <LazyConferenceSponsors hydrate-on-visible />
  </div>
</template>
