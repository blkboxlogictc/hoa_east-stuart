export interface Pillar {
  title: string
  shortDesc: string
  longDesc: string
}

// Shared across Home (short summary cards) and Programs (full numbered list)
// so the six pillars stay in sync in one place instead of being duplicated.
export const PILLARS: Pillar[] = [
  {
    title: 'Community Resource Navigation & Family Stability',
    shortDesc: 'Public resource clinics, trusted referrals, and documented follow-up.',
    longDesc:
      'Public resource clinics, trusted referrals, partner tables, application readiness, volunteer navigation, family-resource information, and documented follow-up.',
  },
  {
    title: 'Housing, Homeowner & Property Preservation',
    shortDesc: 'Probate education, repair navigation, and anti-displacement support.',
    longDesc:
      'Probate and heirs’ property education, senior homeowner outreach, repair-resource navigation, homestead and document-readiness education, legal-aid referrals, and anti-displacement support.',
  },
  {
    title: 'Youth, Workforce & Economic Opportunity',
    shortDesc: 'Leadership, skilled trades, aviation, and entrepreneurship pathways.',
    longDesc:
      'Youth leadership, mentorship, skilled-trades exposure, aviation and technical career pathways, workforce readiness, entrepreneurship education, business and vendor readiness, and opportunity events.',
  },
  {
    title: 'Heritage, Public Art & Cultural Preservation',
    shortDesc: 'Oral histories, cultural corridors, and historic documentation.',
    longDesc:
      'Oral histories, historic photo collection, elder and church histories, public education, mural and cultural-corridor initiatives, youth arts engagement, and future historic-boundary documentation.',
  },
  {
    title: 'Civic Engagement & Community Benefit',
    shortDesc: 'Resident leadership, transparency, and community-benefit tracking.',
    longDesc:
      'Resident leadership development, public information, community listening, tracking public and private commitments, community-benefit reporting, and disciplined advocacy consistent with 501(c)(3) rules.',
  },
  {
    title: 'Community Land Stewardship & Long-Term Affordability',
    shortDesc: 'Feasibility planning toward a future community land trust.',
    longDesc:
      'Education, feasibility planning, partnerships, and governance development for a future community land trust or affiliated land-stewardship entity. No property acquisition or ground-lease activity will occur without Board, legal, tax, title, insurance, and financial review.',
  },
]
