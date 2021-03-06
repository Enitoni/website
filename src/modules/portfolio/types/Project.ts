import { Technology } from "./Technology"

export type ProjectLink = {
  type: "code" | "canonical"
  href: string
}

export type ProjectTheme = {
  primary: string
  accent: string
}

export type Project = {
  key: string
  name: string
  icon: React.ReactNode
  period: [string, string]
  screenshots?: string[]
  shortDescription: string
  longDescription: React.ReactNode
  theme: ProjectTheme
  links: ProjectLink[]
  stack: Technology[]
}
