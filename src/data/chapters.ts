import { fullContent, getCleanContentPaths, type BaseFrontmatter } from "$data"
import type { MDXInstance } from "astro"

export interface Chapter extends BaseFrontmatter {}

export type ChapterInstance = MDXInstance<Chapter>

export async function getChaptersForCourse(course: string): Promise<ChapterInstance[]> {
	const chapters = []
	for (const path of getCleanContentPaths().filter((path) => path.split("/").includes(course))) {
		chapters.push((await fullContent[path]()) as ChapterInstance)
	}
	return chapters
}
