<template>
  <div
    class="pgv-swiper"
    :class="{
      'pgv-swiper--first': isFirstSlide,
      'pgv-swiper--last': isLastSlide,
    }"
  >
    <div ref="swiperEl" class="swiper">
      <div class="swiper-wrapper">
        <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
          <slot name="slide" v-bind="{ slide, index, active: index === activeSlideIndex, isFirst: index === 0 }" />
        </div>
      </div>
    </div>

    <UiSwiperNavigation
      v-if="!isFirstSlide"
      class="pgv-swiper__navigation pgv-swiper__navigation--left"
      direction="left"
      @click="slidePrev"
    />

    <UiSwiperNavigation
      v-if="!isLastSlide "
      class="pgv-swiper__navigation"
      direction="right"
      @click="slideNext"
    />
  </div>
</template>

<script setup lang="ts" generic="T">
import Swiper from 'swiper'
import type { SwiperOptions } from 'swiper/types'
import { A11y, Autoplay, Keyboard, Mousewheel } from 'swiper/modules'

const {
  slides,
} = defineProps<{
  slides: T[]
}>()

let swiper: Swiper | null = null

const swiperEl = useTemplateRef('swiperEl')
const currentlyVisibleIndexes = shallowRef<number[]>([])
const activeSlideIndex = ref<number>(0)

const isFirstSlide = computed(() => activeSlideIndex.value === 0)
const isLastSlide = computed(() => activeSlideIndex.value === slides.length - 1)

function slideNext() {
  swiper?.slideNext()
}

function slidePrev() {
  swiper?.slidePrev()
}

const handleCurrentlyVisibleIndexes = (swiper: Swiper) => {
  currentlyVisibleIndexes.value = Array.from({ length: swiper.slidesPerViewDynamic() })
    .map((_, i) => swiper.realIndex + i)
}

onMounted(() => {
  if (!swiperEl.value) {
    console.error('Swiper element not found.')
    return
  }

  const options: SwiperOptions = {
    modules: [A11y, Autoplay, Keyboard, Mousewheel],
    // autoplay: {
    //   delay: 2000,
    //   pauseOnMouseEnter: true,
    //   disableOnInteraction: false,
    // },
    loop: false,
    direction: 'horizontal',
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      forceToAxis: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    on: {
      realIndexChange: () => {
        activeSlideIndex.value = swiper?.realIndex ?? 0
      },
      init: handleCurrentlyVisibleIndexes,
      slideChangeTransitionEnd: handleCurrentlyVisibleIndexes,
    },
  }

  swiper = new Swiper(swiperEl.value, options)
})

onUnmounted(() => {
  swiper?.destroy()
})
</script>

  <style scoped>
  @import "swiper/swiper-bundle.css";

  .pgv-swiper {
    position: relative;
    display: flex;
    gap: 3rem;
    max-width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .pgv-swiper .swiper:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;

    width: 100px;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), theme('colors.secondary'));
    z-index: 2;
    pointer-events: none;

    opacity: 0;
    transition: opacity 200ms ease-out;

    @media screen and (width >= 768px) {
      width: 200px;
    }
  }

  .pgv-swiper:not(.pgv-swiper--first) .swiper:before {
    opacity: 1;
  }

  .pgv-swiper .swiper:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    width: 100px;
    background: linear-gradient(to right, rgba(15, 15, 15, 0), theme('colors.secondary'));
    z-index: 1;
    pointer-events: none;

    opacity: 0;
    transition: opacity 200ms ease-out;

    @media screen and (width >= 768px) {
      width: 200px;
    }
  }

  .pgv-swiper:not(.pgv-swiper--last) .swiper:after {
    opacity: 1;
  }

  .pgv-swiper .swiper-slide {
    width: fit-content;
    user-select: none;
  }

  .pgv-swiper__navigation {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) translateX(50%);
    z-index: 1;
  }

  .pgv-swiper__navigation--left {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }
  </style>
