export interface SectionData {
  id: string
  label: string
  number: string
}

export interface FeatureCard {
  title: string
  description: string
  image: string
  icon: string
}

export interface SpecItem {
  label: string
  min: string
  rec: string
  icon: string
}

export interface DownloadItem {
  label: string
  version: string
  url: string
  badge?: string
  description?: string
}

export interface SiteContent {
  siteName: string
  tagline: string
  heroTitle: string[]
  heroImage: string
  features: FeatureCard[]
  specs: SpecItem[]
  specsNote: string
  serverAddress: string
  serverLabel: string
  contactEmail: string
  downloads: {
    current: DownloadItem[]
    legacy: DownloadItem[]
    tools: DownloadItem[]
  }
  donateImage: string
  donateText: string
}
