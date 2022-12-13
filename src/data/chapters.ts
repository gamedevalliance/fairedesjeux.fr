import { fullContent, type BaseFrontmatter } from "$data"
import { getContentForPath } from "$utils"
import type { MDXInstance } from "astro"

export interface Chapter extends BaseFrontmatter {}

export type ChapterInstance = MDXInstance<Chapter>

export async function getChaptersForCourse(course: string) {
	const chapters = new Set<ChapterInstance>()
	for (const path of Object.keys(fullContent).filter(
		(path) => !path.endsWith(`${course}/index.mdx`) && path.split("/").includes(course)
	)) {
		chapters.add(await getContentForPath<ChapterInstance>(path))
	}
	return chapters
}
