export interface EventItem {
  date: string | null
  category: string
  title: string
  description: string
  ongoing?: boolean
}

export const EVENTS: EventItem[] = [
  {
    date: null,
    category: 'Pillar II · Housing',
    title: 'Homeowner Stability & Probate Class',
    description: 'Homeowner-stability and probate / heirs’ property education class with qualified partners.',
  },
  {
    date: null,
    category: 'Pillar I · Resources',
    title: 'Community Resource & Opportunity Clinic',
    description: 'Sign-in, needs assessment, referrals, volunteer assignments.',
  },
  {
    date: null,
    category: 'Pillar III · Youth & Workforce',
    title: 'Youth & Workforce Opportunity Event',
    description: 'Youth, workforce, skilled-trades, aviation and entrepreneurship opportunity event.',
  },
  {
    date: null,
    category: 'Organizing',
    title: 'Committee Working Sessions',
    description: 'Committee working sessions and community organizing meetings.',
    ongoing: true,
  },
]
