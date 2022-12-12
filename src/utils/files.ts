interface ContentSlug {
  course: string
  chapter?: string
  page?: string
}

/**
 * Get content's slugs from a content file path
 * @param path where is the content file ?
 * @returns
 */
export function getSlugsFromFilePath(path: string): ContentSlug {
  const slugs = path.substring(path.indexOf("content/") + 8, path.indexOf(".mdx")).split("/")
  return { course: slugs[0], chapter: slugs[1], page: slugs[2] }
}
