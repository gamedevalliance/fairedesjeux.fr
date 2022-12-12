import type { ChapterInstance } from "$data"

/**
 * Temporarily moved to `src/pages/glob.astro`,
 * see this issue -> https://github.com/withastro/astro/issues/5552
 */
export async function getStaticPathFromContentType() {
	throw new Error("Temporarily moved to `src/pages/glob.astro`")
}

export const fullContent = import.meta.glob("/content/**/*.md")

export async function getChaptersForCourse(course: string): Promise<ChapterInstance[]> {
	const chapters = []
	for (const path of Object.keys(fullContent).filter((path) => path.split("/").includes(course))) {
		chapters.push((await fullContent[path]()) as ChapterInstance)
	}
	return chapters
}
