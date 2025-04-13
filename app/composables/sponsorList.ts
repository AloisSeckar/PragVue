type Sponsor = {
  to: string
  image: string
  title: string
  alt: string
}

type UseSponsorList = {
  sponsors: Ref<Sponsor[]>
}

const sponsorList = [
  {
    to: 'https://atos.net/cs/ceska-republika',
    image: 'atos',
    title: 'Atos Czech Republic',
    alt: 'Atos logo',
  },
  {
    to: 'https://www.evidencz.com/',
    image: 'eviden',
    title: 'Eviden Czech Republic',
    alt: 'Eviden logo',
  },
  {
    to: 'https://www.exponet.cz/',
    image: 'exponet',
    title: 'Exponet - Your Event Manager',
    alt: 'Exponet logo',
  },
] satisfies Sponsor[]

export function useSponsorList(): UseSponsorList {
  const sponsors = computed(() => sponsorList)

  return { sponsors }
}
