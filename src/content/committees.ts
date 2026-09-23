export interface Committee {
  numeral: string
  title: string
  desc: string
}

export const COMMITTEES: Committee[] = [
  {
    numeral: 'I',
    title: 'Heritage, Homeowner Stability & Church Unity',
    desc: 'Preserves East Stuart memory, engages elders and churches, supports oral history and cultural documentation, and connects homeowners to qualified education and referral resources.',
  },
  {
    numeral: 'II',
    title: 'Opportunity, Workforce & Economic Development',
    desc: 'Builds pathways into workforce training, skilled trades, aviation, entrepreneurship, vendor readiness, public art opportunities, and measurable community benefit.',
  },
  {
    numeral: 'III',
    title: 'Community Programs, Youth Leadership & Volunteer Operations',
    desc: 'Turns meetings into organized programs through resource clinics, youth leadership, volunteer coordination, events, safe participation systems, data collection, and follow-up.',
  },
]
