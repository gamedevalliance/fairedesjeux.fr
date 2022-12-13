import { ContentSlug, fullContent } from "$data"

export function getAllCoursesPaths(): string[] {
	return Object.keys(fullContent).filter((path) => path.split("/").at(-1) === "index.mdx")
}

export function getAllChaptersPaths(): string[] {
	return Object.keys(fullContent).filter((path) => path.split("/").at(-1) === "chapter.mdx")
}

export function getAllPagePaths(): string[] {
	return Object.keys(fullContent).filter(
		(path) => ![...getAllCoursesPaths(), ...getAllChaptersPaths()].includes(path)
	)
}

/**
 * Get content's slugs from a content file path
 * @param path where is the content file ?
 * @returns
 */
export function getSlugsFromFilePath(path: string): ContentSlug {
	const slugs = path
		.substring(path.indexOf("content/") + "content/".length, path.indexOf(".mdx"))
		.split("/")
	return {
		course: slugs[0],
		chapter: slugs[1] ? cleanSlug(slugs[1]) : undefined,
		page: slugs[2] ? cleanSlug(slugs[2]) : undefined,
	}
}

/**
 * Return slug without routing information (ex: 01-par-ou-commencer becomes par-ou-commencer)
 * @param {string} slug slug to clean
 */
export function cleanSlug(slug: string) {
	return slug.replaceAll(/(\d+-)/gm, "")
}
