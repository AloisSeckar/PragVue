type Speaker = {
  name: string
  country: string
  github: string
}

type UseSpeakerList = {
  speakers: Ref<Speaker[]>
}

const speakerList = [
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
] satisfies Speaker[]

export function useSpeakerList(): UseSpeakerList {
  const speakers = computed(() => speakerList)

  return { speakers }
}
