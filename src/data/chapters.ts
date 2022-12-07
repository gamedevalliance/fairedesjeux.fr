import type { MarkdownInstance } from "astro"
import type { BaseFrontmatter } from "./shared"

export interface Chapter extends BaseFrontmatter {}

export type ChapterInstance = MarkdownInstance<Chapter>
