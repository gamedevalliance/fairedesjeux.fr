import { getContentForPath, getSlugsFromFilePath } from "$utils"
import type { MDXInstance } from "astro"
import { BaseFrontmatter, getCleanContentPaths } from "./shared"

export interface Page extends BaseFrontmatter {}

export type PageInstance = MDXInstance<Page>

export async function getPagesForChapters(chapter: string) {
	return getCleanContentPaths()
		.filter((path) => path.split("/").includes(chapter))
		.flatMap(getContentForPath)
}

export function getFirstPageSlugForChapter(chapter: string): string | undefined {
	const firstPage = getCleanContentPaths().find((path) => path.split("/").includes(chapter))

	if (!firstPage) return undefined
	return getSlugsFromFilePath(firstPage).page ?? undefined
}
