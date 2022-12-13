import { ContentType, CourseInstance, fullContent, getFirstPageSlugForChapter } from "$data"
import {
	getAllChaptersPaths,
	getAllCoursesPaths,
	getAllPagePaths,
	getSlugsFromFilePath,
} from "$utils"
import type { GetStaticPathsResult, MDXInstance } from "astro"

export async function getStaticPathFromContentType(
	contentType: ContentType
): Promise<GetStaticPathsResult> {
	switch (contentType) {
		case "course":
			return Promise.all(
				getAllCoursesPaths().flatMap(async (path) => ({
					params: {
						course: getSlugsFromFilePath(path).course,
					},
					props: {
						course: await getContentForPath<CourseInstance>(path),
					},
				}))
			)
		case "chapter":
			return Promise.all(
				getAllChaptersPaths().flatMap(async (path) => {
					const { course, chapter } = getSlugsFromFilePath(path)
					return {
						params: {
							chapter,
							course,
						},
						props: {
							firstPage: chapter ? getFirstPageSlugForChapter(chapter) : undefined,
						},
					}
				})
			)
		case "page":
			return Promise.all(
				getAllPagePaths().flatMap(async (path) => {
					const { course, chapter, page } = getSlugsFromFilePath(path)
					return {
						params: {
							course,
							chapter,
							page,
						},
						props: {
							page: await getContentForPath(path),
						},
					}
				})
			)
		default:
			return []
	}
}

export async function getContentForPath<T extends MDXInstance<Record<string, any>>>(
	path: string
): Promise<T> {
	let content: T

	// HACK: Astro's dev server crashes if this fails, weird. erika, 2022-12-12
	try {
		content = (await fullContent[path]()) as T
	} catch (err) {
		console.error("Could not import from path", path, err)
		content = { frontmatter: {} } as any
	}

	return { ...content, frontmatter: postProcessFrontmatter(content.frontmatter) }

	function postProcessFrontmatter(frontmatter: any) {
		frontmatter.slug = getSlugsFromFilePath(path)

		return frontmatter
	}
}
