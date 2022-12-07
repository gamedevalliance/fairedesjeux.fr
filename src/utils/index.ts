/**
 * Get content's slug from a content file path
 * @param path where is the content file ?
 * @param contentType what's the type of content ?
 * @returns
 */
export function getSlugFromPath(path: String, contentType: String): String {
  switch (contentType) {
    case "course":
      return path.substring(
        // there is probably a smarter way
        path.indexOf("content/") + 8,
        path.indexOf("/index.md")
      )
    default:
      throw new Error(
        `contentType from getSlugFromPath() is invalid: ${contentType}`
      )
  }
}
