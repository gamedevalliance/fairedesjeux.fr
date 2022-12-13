import { cleanSlug, getContentForPath, getSlugsFromFilePath } from "$utils"
import type { MDXInstance } from "astro"
import { BaseFrontmatter, ContentSlug, fullContent, getCleanContentPaths } from "./shared"

export interface Page extends BaseFrontmatter {}

export type PageInstance = MDXInstance<Page>

export async function getPagesForChapter(chapterSlug: ContentSlug) {
	return Promise.all(
		Object.keys(fullContent)
			.filter(isProperCourseAndChapter)
			.flatMap(async (path) => await getContentForPath<PageInstance>(path))
	)

	function isProperCourseAndChapter(path: string) {
		if (!chapterSlug.chapter) return false

		const cleanPathParts = cleanSlug(path).split("/")

		return (
			cleanPathParts.includes(chapterSlug.course) &&
			cleanPathParts.includes(chapterSlug.chapter) &&
			!path.endsWith("chapter.mdx")
		)
	}
}

export function getFirstPageSlugForChapter(chapter: string): string | undefined {
	const firstPage = getCleanContentPaths().find((path) => path.split("/").includes(chapter))

	if (!firstPage) return undefined
	return getSlugsFromFilePath(firstPage).page ?? undefined
}
