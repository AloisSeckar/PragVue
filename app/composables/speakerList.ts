type Speaker = {
  name: string
  countryCode: string
  country: string
  github: string
}

  type UseSpeakerList = {
    speakers: Ref<Speaker[]>
  }

const speakerList = [
  {
    name: 'Alex Lichter',
    countryCode: 'NED',
    country: 'Netherlands',
    github: 'TheAlexLichter',
  },
  {
    name: 'Jakub Andrzejewski',
    countryCode: 'POL',
    country: 'Poland',
    github: 'Baroshem',
  },
  {
    name: 'Louëlla Creemers',
    countryCode: 'NED',
    country: 'Netherlands',
    github: 'LouellaCreemers',
  },
  {
    name: 'Julien Huang',
    countryCode: 'FRA',
    country: 'France',
    github: 'huang-julien',
  },
  {
    name: 'Adam Berecz',
    countryCode: 'HUN',
    country: 'Hungary',
    github: 'adamberecz',
  },
  {
    name: 'Anastasiia Zvenigorodskaia',
    countryCode: 'ESP',
    country: 'Spain',
    github: 'zvenigorodskaia',
  },
  {
    name: 'Raí Siqueira',
    countryCode: 'BRA',
    country: 'Brazil',
    github: 'raisiqueira',
  },
  {
    name: 'Alvaro Saburido Rodriguez',
    countryCode: 'ESP',
    country: 'Spain',
    github: 'alvarosabu',
  },
  {
    name: 'Thorsten Seyschab',
    countryCode: 'GER',
    country: 'Germany',
    github: 'toddeTV',
  },
  {
    name: 'Konstantin Bifert',
    countryCode: 'NED',
    country: 'Netherlands',
    github: 'kissu',
  },
  {
    name: 'Juan Andrés Núñez',
    countryCode: 'ESP',
    country: 'Spain',
    github: 'juanwmedia',
  },
  {
    name: 'Alexander Opalic',
    countryCode: 'GER',
    country: 'Germany',
    github: 'alexanderop',
  },
  {
    name: 'Alois Sečkár',
    countryCode: 'CZE',
    country: 'Czech Republic',
    github: 'AloisSeckar',
  },
] satisfies Speaker[]

export function useSpeakerList(): UseSpeakerList {
  const speakers = computed(() => speakerList)

  return { speakers }
}
