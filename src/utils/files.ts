import type { ContentType } from "$data"

/**
 * Get content's slug from a content file path
 * @param path where is the content file ?
 * @param contentType what's the type of content ?
 * @returns
 */
export function getSlugFromFilePath(
  path: string,
  contentType: ContentType
): string {
  switch (contentType) {
    case "Course":
      return extractSlugFromFilePath(path, "index.md")
    case "Chapter":
      return extractSlugFromFilePath(path, "chapter.md")
    default:
      throw new Error(
        `[getSlugFromFilePath] contentType not yet implemented: ${contentType}`
      )
  }
}

/**
 * Private function, utils used by getSlugFromFilePath to substring path
 * @param path What's the path to substring ?
 * @param end What's the end of the subtring ?
 * @returns
 */
function extractSlugFromFilePath(path: string, end: string) {
  return path.substring(
    // there is probably a smarter way
    path.indexOf("content/") + 8,
    path.indexOf(`/${end}`)
  )
}
