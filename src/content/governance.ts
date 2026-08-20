export interface InfoCard {
  title: string
  body: string[]
}

export const GOVERNANCE_CARDS: InfoCard[] = [
  {
    title: 'Governance',
    body: [
      'Five voting directors.',
      'President, Vice President, Secretary, Treasurer, At-Large/Youth Director.',
      'Board retains fiduciary and legal authority.',
    ],
  },
  {
    title: 'Community Organization',
    body: [
      'East Stuart advisory network.',
      'Resident input, issue tracking, outreach, recommendations.',
      'Advisors and committee members do not bind the corporation.',
    ],
  },
  {
    title: 'Program Delivery',
    body: [
      'Board-approved programs and partnerships.',
      'Written scopes, safety rules, financial controls, records, outcome reporting.',
      'No promises without authorization.',
    ],
  },
]

export interface Committee {
  title: string
  desc: string
}

export const COMMITTEES: Committee[] = [
  {
    title: '1. Heritage, Homeowner Stability & Church Unity',
    desc: 'Preserves East Stuart memory, engages elders and churches, supports oral history and cultural documentation, and connects homeowners to qualified education and referral resources.',
  },
  {
    title: '2. Opportunity, Workforce & Economic Development',
    desc: 'Builds pathways into workforce training, skilled trades, aviation, entrepreneurship, vendor readiness, public art opportunities, and measurable community benefit.',
  },
  {
    title: '3. Community Programs, Youth Leadership & Volunteer Operations',
    desc: 'Turns meetings into organized programs through resource clinics, youth leadership, volunteer coordination, events, safe participation systems, data collection, and follow-up.',
  },
]

export const ACCOUNTABILITY_COMMITMENTS: string[] = [
  'The Board will govern; committees and advisors will organize, recommend, document, and execute only authorized work.',
  'We will collaborate with capable service providers instead of duplicating licensed or specialized services.',
  'We will not promise money, jobs, grants, repairs, housing, legal outcomes, contracts, facility access, or government action without written authority and verified capacity.',
  'We will protect resident, youth, family, health, housing, property, and oral-history information and report public outcomes responsibly.',
  'We will maintain clear records, financial controls, conflict-of-interest safeguards, written agreements, and measurable program reporting.',
  'We will preserve East Stuart’s heritage while building real pathways into education, workforce, entrepreneurship, housing stability, land stewardship, civic leadership, and opportunity.',
]
