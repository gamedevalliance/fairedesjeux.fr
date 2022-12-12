import type { MDXInstance } from "astro"
import type { BaseFrontmatter } from "./shared"

export interface Chapter extends BaseFrontmatter {}

export type ChapterInstance = MDXInstance<Chapter>
