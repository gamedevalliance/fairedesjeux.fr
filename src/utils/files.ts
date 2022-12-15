import { ContentSlug, fullContent } from "$data"
import * as crypto from "crypto"
import * as fs from "fs"
import * as path from "path"

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

export function copyHashedAsset(outputDir: string, file: string) {
	const fileName = `${getFileSHA1(file)}-${path.basename(file)}`
	const publicOutputDir = path.join("public/", outputDir)
	const outputResult = path.join(publicOutputDir, fileName)
	if (!fs.existsSync(outputResult)) {
		fs.mkdirSync(publicOutputDir, { recursive: true })
		fs.copyFileSync(file, outputResult)
	}

	return "/" + path.join(outputDir, fileName)
}

export function getFileSHA1(filePath: string) {
	const fileBuffer = fs.readFileSync(filePath)
	const hashSum = crypto.createHash("sha1")
	hashSum.update(fileBuffer)

	return hashSum.digest("hex").substring(0, 10)
}
