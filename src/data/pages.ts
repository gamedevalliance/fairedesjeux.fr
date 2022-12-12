import type { MarkdownInstance } from "astro"
import type { BaseFrontmatter } from "./shared"

export interface Page extends BaseFrontmatter {}

export type PageInstance = MarkdownInstance<Page>
