export interface ToolboxDoc {
  title: string
  meta: string
  href: string
}

export const TOOLBOX_AVAILABLE: ToolboxDoc[] = [
  { title: 'Comprehensive Bylaws', meta: 'PDF', href: '/HOA_Comprehensive_Bylaws_Royal.pdf' },
  { title: 'Executive Overview · July 2026', meta: 'Word document', href: '/HOA_Executive_Overview_Updated_July_2026.docx' },
]

export interface ToolboxShelf {
  title: string
  desc: string
}

export const TOOLBOX_SHELVES: ToolboxShelf[] = [
  { title: 'Family & Resource Navigation', desc: 'Who to call, what to bring, and how referrals are tracked.' },
  { title: 'Homeowner & Heirs’ Property', desc: 'Probate basics, homestead and document readiness, legal-aid referrals.' },
  { title: 'Youth & Workforce', desc: 'Training programs, skilled-trades and aviation pathways, apprenticeship contacts.' },
  { title: 'Business & Vendor Readiness', desc: 'Registration, licensing, vendor lists, and procurement opportunities.' },
  { title: 'Heritage & Oral History', desc: 'Release forms, interview guides, and photo-submission standards.' },
  { title: 'Volunteer & Committee Forms', desc: 'Sign-up, youth-safety procedures, and committee participation.' },
]
