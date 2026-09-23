export interface SponsorTier {
  name: string
  desc: string
}

export const SPONSOR_TIERS: SponsorTier[] = [
  { name: 'Cornerstone', desc: 'Institutional launch support' },
  { name: 'Pillar', desc: 'Sponsorship of one program pillar' },
  { name: 'Event', desc: 'Clinics, workshops, youth events' },
  { name: 'In-kind', desc: 'Space, printing, professional services' },
]

export const SPONSORS_EMPTY_STATE = 'The first names will be carved here.'
