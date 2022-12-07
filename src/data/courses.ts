import type { BaseFrontmatter } from "./shared"

export interface Course extends BaseFrontmatter {
  type: string
  short_title: string
  date: string
  author: string
  medal: string
  medal_message: string
  cover_wide: string
  cover_tall: string
}
