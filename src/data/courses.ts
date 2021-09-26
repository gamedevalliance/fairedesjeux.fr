import * as matter from 'gray-matter'
import { fdir } from 'fdir'
import type { GroupOutput } from 'fdir'
import { basename, extname } from 'path'
import { metadata } from './metadata'

interface Course extends matter.GrayMatterFile<string> {
    slug: string,
    link: URL,
    chapters: Chapter[]
    data: {
        title: string,
        short_title: string,
        description: string,
        date: Date,
        video: string
    }
}

interface Chapter {
    slug: string,
    pages: Page[]
    title: string
}

interface Page extends matter.GrayMatterFile<string> {
    slug: string,
    data: {
        title: string,
        description: string
    }
}

const courses: Course[] = (() => {
    const coursesDirs = new fdir()
        .withFullPaths()
        .onlyDirs()
        .withMaxDepth(1)
        .crawl('./content/courses/')
        .sync() as string[]

    // NOTE: We need to slice the array due to fdir inserting the current dir in the array it returns
    const courseList: Course[] = coursesDirs.slice(1).map(dir => {
        const courseData = matter.read(dir + "/course.md") as Course
        const courseSlug = basename(dir)
        const courseLink = new URL(`/${courseSlug}`, metadata.websiteURL)

        const chapterDirs = new fdir()
                                .group()
                                .withFullPaths()
                                .withMaxDepth(2)
                                .filter((path) => path.endsWith('.md'))
                                .crawl(dir)
                                .sync() as GroupOutput

        // NOTE: Same as above NOTE regarding slice
        const chapterList: Chapter[] = chapterDirs.slice(0, -1).map(group => {
            const chapterSlug = basename(group.dir)

            const pages: Page[] = group.files.map((file) => {
                const pageData = matter.read(file) as Page
                const pageSlug = basename(file, extname(file))
                const pageLink = new URL(`/${courseSlug}/${chapterSlug}/${pageSlug}`, metadata.websiteURL)

                return {'slug': pageSlug, link: pageLink, ...pageData}
            })

            // TODO: Redactors would prefer to set chapters title through a meta json file than through chapter.md files
            // We need to figure out the format of that file and load it somewhere. Maybe it could be in a field in the course.md file?
            return { title: 'truc', 'slug': chapterSlug, pages }
        })

        return {'slug': courseSlug, 'link': courseLink, 'chapters': chapterList, ...courseData}
    })

    return courseList
})()

function getCourse(slug: string): Course | undefined {
    return courses.find((course: Course) => {
        return course.slug === slug
    })
}

function getStaticListCourses(): Record<string, unknown>[] {
    return courses.map(course => {
        return ({ params: { slug: course.slug } })
    })
}

export { courses, getCourse, getStaticListCourses }
