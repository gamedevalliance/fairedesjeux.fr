import { getAllCoursesPaths, getContentForPath } from "$utils"
import type { MDXInstance } from "astro"
import type { BaseFrontmatter } from "./shared"

export interface Course extends BaseFrontmatter {
	type: "SKILL" | "ENGINE"
	short_title: string
	date: string
	author: string
	medal: "SILVER" | "BRONZE" | "GOLD" | "PLATINUM"
	medal_message: string
	cover_wide: string
	cover_tall: string
}

export type CourseInstance = MDXInstance<Course>

export function getAllCourses(): Promise<CourseInstance[]> {
	return Promise.all(
		getAllCoursesPaths().flatMap(async (path) => await getContentForPath<CourseInstance>(path))
	)
}
