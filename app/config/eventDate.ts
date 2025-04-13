import type { ICalEventData } from 'ical-generator'

export const eventData = {
  summary: 'PragVue Conference 2025',
  start: new Date('2025-09-23T09:00:00'),
  end: new Date('2025-09-23T18:00:00'),
  location: 'Grandium Hotel Prague',
  description: 'The Czech Vue.js conference. Connect with Vue.js experts and enthusiasts.',
  url: 'https://pragvue.cz',
  timezone: 'Europe/Prague',
} satisfies ICalEventData
