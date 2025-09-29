export type VueIcon = 'vue' | 'nuxt' | 'pinia' | 'vitest' | 'vite' | 'vueuse' | 'tresjs' | 'nuxt-ignis' | 'rollup' | 'oxc' | 'formkit' | 'vueform' | 'tailwind' | 'unjs' | 'h3' | 'nitro' | 'supabase' | null

export type ScheduleInfo = {
  time: string
  event?: string
  speaker?: string
  info?: SpeakerInfo
}

export type SpeakerInfo = {
  github: string
  name: string
  country: string
  bio: string
  bg: string
  title: string
  details: string
  slides?: string
  video?: string
}

export type SponsorInfo = {
  tier: number
  to: string
  image: string
  title: string
  alt: string
}
