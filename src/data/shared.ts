import { cleanSlug } from "$utils"

export const fullContent = import.meta.glob("/content/**/*.mdx")

/**
 * This function returns all the content paths already cleaned of routing information
 * This is mostly useful when trying to get content using slugs, as they're usually always clean
 */
export function getCleanContentPaths(): string[] {
	return Object.keys(fullContent).map(cleanSlug)
}

export interface BaseFrontmatter {
	title: string
	description: string
	opengraph_image: string | null
	slug: ContentSlug
	url: string
}

export interface ContentSlug {
	course: string
	chapter?: string
	page?: string
}

export type ContentType = "course" | "chapter" | "page"
