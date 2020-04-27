// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');

module.exports = function (api) {
    api.loadSource(({ addCollection, getCollection }) => {
        // TODO: Define these collections in a .graphql file like we do on GDA, it'd allow us to have stricter schema - erika, 2020-04-18
        const coursesCollection = addCollection('Course');
        const chaptersCollection = addCollection('Chapter');
        const postsCollection = getCollection('Section');

        coursesCollection.addReference('chapters', 'Chapter');
        chaptersCollection.addReference('course', 'Course');
        chaptersCollection.addReference('sections', 'Section');
        postsCollection.addReference('chapter', 'Chapter');

        const courses = fs.readdirSync('content/courses', { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .filter((dirent) => fs.existsSync(`content/courses/${dirent.name}/course.json`))
            .map((dirent) => dirent.name);

        courses.forEach((course) => {
            const courseMeta = JSON.parse(fs.readFileSync(`content/courses/${course}/course.json`));

            const chapters = fs.readdirSync(`content/courses/${course}/`, { withFileTypes: true })
                .filter((dirent) => dirent.isDirectory())
                .filter((dirent) => fs.existsSync(`content/courses/${course}/${dirent.name}/chapter.json`))
                .map((dirent) => dirent.name);

            const chapterList = [];
            chapters.forEach((chapter) => {
                const chapterMeta = JSON.parse(fs.readFileSync(`content/courses/${course}/${chapter}/chapter.json`));

                chapterList.push(chaptersCollection.addNode({
                    id: `${course}/${chapter.substring(0, 2)}`,
                    slug: `${chapter.substring(3)}`,
                    course,
                    ...chapterMeta,
                }).id);
            });

            coursesCollection.addNode({
                id: course,
                slug: course,
                chapters: chapterList,
                engine_name: courseMeta.engine_name || null,
                ...courseMeta,
            });
        });
    });

    /*
        NOTE: We have to disable those two rules because Gridsome force us to modify nodes in a way ESlint is not happy
        about, this won't be needed once the next NOTE is solved because the whole onCreateNode thing would go away - erika, 2020-04-19
    */
    /* eslint-disable no-param-reassign */
    /* eslint-disable consistent-return */

    const tempMap = {};
    api.onCreateNode((options) => {
        if (options.internal.typeName === 'Section') {
            /*
                NOTE: So far there's no problem with doing this, however in the future it'd be more optimal if we could
                add the chapter to the node in loadSource or through a plugin instead of adding it here. It'd allow us
                to directly refer to the chapter in the templates definitions. Also, if we could access the chapter before
                (or inversely, get the posts related to a chapter) we could reverse the architecture and uses BelongsTo
                instead of finding the course from the chapter from the section. Confusing. - erika, 2020-04-20
            */
            options.chapter = options.fileInfo.directory.substring(0, options.fileInfo.directory.indexOf('/') + 3);
            tempMap[options.id] = options.chapter;

            return {
                ...options,
            };
        }

        if (options.internal.typeName === 'Chapter') {
            const tempList = [];
            Object.entries(tempMap).forEach(([key, value]) => {
                if (value === options.id) {
                    tempList.push(key);
                }
            });
            options.sections = tempList;


            return {
                ...options,
            };
        }
    });
};
