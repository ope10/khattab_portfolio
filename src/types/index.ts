// ─── Project ────────────────────────────────────────────────────────────────
export interface CardLayout {
  width: number
  height: number
  artClassName: string
  mobileArtClassName: string
  copyClassName: string
  copyWidth?: number
  imageClassName?: string
  mobileCopyClassName?: string
  reverse?: boolean
}

export interface UXChallenge {
  title: string
  description: string
}

export interface Project {
  slug: string
  title: string
  subTitle: string
  subtitle: string
  badge: 'Mobile App' | 'Web App'
  year: string
  role: string
  duration: string
  platform: string
  overview: string
  problem: string
  challenges?: string
  solution?: string
  solutionFeatures?: string[]
  goals?: string
  landingPageIntro?: string
  designProcess?: {
    intro?: string
    focusAreas?: string[]
    focusAreasIntro?: string
    outro?: string
  }
  uxChallenges?: UXChallenge[]
  conclusion?: string
  keyFeatures: string[]
  tools: string[]
  outcome: string
  coverImage: string
  heroImage: string
  gallery: GallerySection[]
  prevSlug?: string
  nextSlug?: string
  card: CardLayout // this line must be here
  reverse?: boolean
  client?: string
  industry?: string
}

export interface GallerySection {
  label: string
  images: string[]
  caption?: string
}

// ─── Experience ─────────────────────────────────────────────────────────────
export interface ExperienceItemData {
  period: string
  company: string
  role: string
  summary?: string
  highlights: string[]
  keyContribution?: string
}

// ─── FAQ ────────────────────────────────────────────────────────────────────
export interface FaqItem {
  question: string
  answer: string
}

// ─── Service ────────────────────────────────────────────────────────────────
export interface Service {
  number: string
  title: string
  items: string[]
}

// ─── Tool ───────────────────────────────────────────────────────────────────
export interface Tool {
  name: string
  description: string
  icon: string
}

// ─── Nav ────────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
}

export interface Social {
  label: string
  href: string
  icon: string
}