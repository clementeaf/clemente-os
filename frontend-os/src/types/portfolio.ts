export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
  category: 'web' | 'mobile' | 'desktop' | 'other'
  featured: boolean
  year: number
}

export interface AboutInfo {
  name: string
  title: string
  bio: string
  skills: string[]
  experience: Experience[]
  education: Education[]
  contact: ContactInfo
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
}

export interface Education {
  institution: string
  degree: string
  period: string
  description?: string
}

export interface ContactInfo {
  email: string
  github?: string
  linkedin?: string
  twitter?: string
  website?: string
}
