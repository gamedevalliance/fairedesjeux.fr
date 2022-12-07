/**
 * Get content's slug from a content file path
 * @param path where is the content file ?
 * @param contentType what's the type of content ?
 * @returns
 */
export function getSlugFromPath(
  path: string,
  contentType: contentType
): string {
  switch (contentType) {
    case "Course":
      return path.substring(
        // there is probably a smarter way
        path.indexOf("content/") + 8,
        path.indexOf("/index.md")
      )
    default:
      throw new Error(`contentType not yet implemented: ${contentType}`)
  }
}

type contentType = "Course" | "Chapter" | "Page"
