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
      v-if="!isFirstSlide || loop"
      class="pgv-swiper__navigation pgv-swiper__navigation--left"
      direction="left"
      @click="slidePrev"
    />

    <UiSwiperNavigation
      v-if="!isLastSlide || loop"
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
  loop,
} = defineProps<{
  slides: T[]
  loop?: boolean
}>()

let swiper: Swiper | null = null
const swiperEl = useTemplateRef('swiperEl')

function slideNext() {
  swiper?.slideNext()
}

function slidePrev() {
  swiper?.slidePrev()
}

const currentlyVisibleIndexes = shallowRef<number[]>([])
const handleCurrentlyVisibleIndexes = (swiper: Swiper) => {
  currentlyVisibleIndexes.value = Array.from({ length: swiper.slidesPerViewDynamic() })
    .map((_, i) => swiper.realIndex + i)
}
const activeSlideIndex = ref<number>(0)
const isFirstSlide = computed(() => activeSlideIndex.value === 0)
const isLastSlide = computed(() => currentlyVisibleIndexes.value[currentlyVisibleIndexes.value.length - 1] === slides.length - 1)

onMounted(() => {
  if (!swiperEl.value) {
    console.error('Swiper element not found.')
    return
  }

  const options: SwiperOptions = {
    modules: [A11y, Autoplay, Keyboard, Mousewheel],
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    loop: loop,
    direction: 'horizontal',
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      forceToAxis: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 0,
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

onUnmounted(() =>{
  swiper?.destroy()
})
</script>

<style scoped>
@import "swiper/swiper-bundle.css";

.pgv-swiper {
  position: relative;
  display: flex;
  gap: 3rem;
}

.pgv-swiper .swiper:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;

  width: 200px;
  background: linear-gradient(to left, rgba(15, 15, 15, 0), theme('colors.woodsmoke.900'));
  z-index: 2;
  pointer-events: none;

  opacity: 0;
  transition: opacity 200ms ease-out;
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

  width: 200px;
  background: linear-gradient(to right, rgba(15, 15, 15, 0), theme('colors.woodsmoke.900'));
  z-index: 1;
  pointer-events: none;

  opacity: 0;
  transition: opacity 200ms ease-out;
}

.pgv-swiper:not(.pgv-swiper--last) .swiper:after {
  opacity: 1;
}

.pgv-swiper .swiper-slide {
  width: auto !important;
  height: auto;
  margin-right: 30px;
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
