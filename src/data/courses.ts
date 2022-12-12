import type { MDXInstance } from "astro"
import type { BaseFrontmatter } from "./shared"

export interface Course extends BaseFrontmatter {
	type: "SKILL" | "ENGINE"
	short_title: string
	date: string
	author: string
	medal: "SILVER" | "BRONZE" | "GOLD" | "PLATINIUM"
	medal_message: string
	cover_wide: string
	cover_tall: string
}

export type CourseInstance = MDXInstance<Course>
