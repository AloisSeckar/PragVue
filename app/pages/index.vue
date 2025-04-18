<template>
  <div>
    <HeroBanner />

    <a id="info" />
    <LazyConferenceInfo hydrate-on-visible />

    <a id="speakers" />
    <LazyConferenceSpeakers hydrate-on-visible />

    <!-- TODO schedule -->

    <LazyConferencePast hydrate-on-visible />

    <LazyConferenceVenue hydrate-on-visible />

    <LazyConferencePrague hydrate-on-visible />

    <LazyConferenceSponsors hydrate-on-visible />
  </div>
</template>
