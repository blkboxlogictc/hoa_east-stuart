export interface ChangeCell {
  numeral: string
  label: string
  body: string
  inverted?: boolean
}

export const THEORY_OF_CHANGE: ChangeCell[] = [
  {
    numeral: '01',
    label: 'What we put in',
    body: 'Resident leadership, a five-director board, standing committees, volunteer capacity, partner institutions, and disciplined records and financial controls.',
  },
  {
    numeral: '02',
    label: 'What we do',
    body: 'Resource clinics, homeowner and probate education, youth and workforce pathways, oral history and public art, civic listening, and land-trust feasibility work.',
  },
  {
    numeral: '03',
    label: 'What changes',
    body: 'Families reach the services they qualify for, homeowners keep title and property, young people find paid pathways, and commitments made to East Stuart are tracked in public.',
  },
  {
    numeral: '04',
    label: 'Where it leads',
    body: 'A neighborhood that holds its heritage and its land — stable ownership, resident governance, and long-term affordability under community stewardship.',
    inverted: true,
  },
]

export const THEORY_OF_CHANGE_CAPTION =
  'This framework is a working draft for Board review. Measures, targets, and evaluation methods will be attached before publication.'
