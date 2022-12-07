export interface BaseFrontmatter {
  title: string
  description: string
  opengraph_image: string | null
}

export type ContentType = "Course" | "Chapter" | "Page"
