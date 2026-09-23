export interface InfoCard {
  title: string
  body: string
}

export const GOVERNANCE_CARDS: InfoCard[] = [
  {
    title: 'Governance',
    body: 'Five voting directors. President, Vice President, Secretary, Treasurer, At-Large/Youth Director. Board retains fiduciary and legal authority.',
  },
  {
    title: 'Community Organization',
    body: 'East Stuart advisory network. Resident input, issue tracking, outreach, recommendations. Advisors and committee members do not bind the corporation.',
  },
  {
    title: 'Program Delivery',
    body: 'Board-approved programs and partnerships. Written scopes, safety rules, financial controls, records, outcome reporting. No promises without authorization.',
  },
]

export interface BoardSeat {
  role: string
  name?: string
  photo?: string
}

export const BOARD: BoardSeat[] = [
  { role: 'President' },
  { role: 'Vice President' },
  { role: 'Secretary' },
  { role: 'Treasurer' },
  { role: 'At-Large / Youth Director' },
]

export const ACCOUNTABILITY_COMMITMENTS: string[] = [
  'The Board will govern; committees and advisors will organize, recommend, document, and execute only authorized work.',
  'We will collaborate with capable service providers instead of duplicating licensed or specialized services.',
  'We will not promise money, jobs, grants, repairs, housing, legal outcomes, contracts, facility access, or government action without written authority and verified capacity.',
  'We will protect resident, youth, family, health, housing, property, and oral-history information and report public outcomes responsibly.',
  'We will maintain clear records, financial controls, conflict-of-interest safeguards, written agreements, and measurable program reporting.',
  'We will preserve East Stuart’s heritage while building real pathways into education, workforce, entrepreneurship, housing stability, land stewardship, civic leadership, and opportunity.',
]

export interface GoverningDocument {
  title: string
  meta: string
  href?: string
  pending?: boolean
}

export const GOVERNING_DOCUMENTS: GoverningDocument[] = [
  { title: 'Comprehensive Bylaws', meta: 'PDF · Prepared for formal adoption', href: '/HOA_Comprehensive_Bylaws_Royal.pdf' },
  { title: 'Executive Overview · July 2026', meta: 'Word document', href: '/HOA_Executive_Overview_Updated_July_2026.docx' },
  { title: 'Board resolutions, core policies & committee charters', meta: 'Posted after formal Board adoption', pending: true },
]
