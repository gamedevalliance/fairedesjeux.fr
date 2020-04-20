// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// NOTE: We have to disable those two rules because Gridsome force us to do it this and eslint doesn't like it, erika - 2020-04-19
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

const fs = require('fs');

module.exports = function (api) {
    api.loadSource(({ addCollection, getCollection }) => {
        // TODO: Define these collections in a .graphql file like we do on GDA - erika, 2020-04-18
        const lessonsCollection = addCollection('Course');
        const chaptersCollection = addCollection('Chapter');
        const postsCollection = getCollection('Section');

        postsCollection.addReference('chapter', 'Chapter');

        const lessons = fs.readdirSync('content/lessons', { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .filter((dirent) => fs.existsSync(`content/lessons/${dirent.name}/lesson.json`))
            .map((dirent) => dirent.name);

        lessons.forEach((lesson) => {
            const lessonMeta = JSON.parse(fs.readFileSync(`content/lessons/${lesson}/lesson.json`));

            const lessonNode = lessonsCollection.addNode({
                slug: lesson,
                ...lessonMeta,
            });

            const chapters = fs.readdirSync(`content/lessons/${lesson}/`, { withFileTypes: true })
                .filter((dirent) => dirent.isDirectory())
                .filter((dirent) => fs.existsSync(`content/lessons/${lesson}/${dirent.name}/chapter.json`))
                .map((dirent) => dirent.name);

            chapters.forEach((chapter) => {
                const chapterMeta = JSON.parse(fs.readFileSync(`content/lessons/${lesson}/${chapter}/chapter.json`));

                chaptersCollection.addNode({
                    id: `${lesson}-${chapter.substring(0, 2)}`,
                    slug: `${chapter.substring(3)}`,
                    lesson: lessonNode,
                    ...chapterMeta,
                });
            });
        });
    });

    api.onCreateNode((options) => {
        if (options.internal.typeName === 'Section') {
            options.chapter = options.fileInfo.directory.replace('./content/lessons/', '');

            return {
                ...options,
            };
        }
    });

    api.createPages(async ({ createPage, graphql }) => {
        const { data } = await graphql(`{
            allChapter {
                edges {
                    node {
                        slug
                        lesson {
                            slug
                        }
                    }
                }
            }

            allLesson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }`);

        data.allChapter.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.lesson.slug}/${node.slug}`,
                component: './src/templates/Chapter.vue',
            });
        });

        data.allLesson.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.slug}`,
                component: './src/templates/Lesson.vue',
            });
        });
    });
};
