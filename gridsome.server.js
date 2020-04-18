// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');

module.exports = function (api) {
    api.loadSource(({ addCollection, store }) => {
        // TODO: Define these collections in a .graphql file like we do on GDA - erika, 2020-04-18
        const lessonsCollection = addCollection('Lesson');
        const chaptersCollection = addCollection('Chapter');
        lessonsCollection.addReference('chapters', 'Chapter');

        const lessons = fs.readdirSync('content/lessons', { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .filter((dirent) => fs.existsSync(`content/lessons/${dirent.name}/lesson.json`))
            .map((dirent) => dirent.name);

        lessons.forEach((lesson) => {
            const lessonMeta = JSON.parse(fs.readFileSync(`content/lessons/${lesson}/lesson.json`));

            const chapters = fs.readdirSync(`content/lessons/${lesson}/`, { withFileTypes: true })
                .filter((dirent) => dirent.isDirectory())
                .filter((dirent) => fs.existsSync(`content/lessons/${lesson}/${dirent.name}/chapter.json`))
                .map((dirent) => dirent.name);

            const chapterList = [];
            chapters.forEach((chapter) => {
                const chapterMeta = JSON.parse(fs.readFileSync(`content/lessons/${lesson}/${chapter}/chapter.json`));

                chapterList.push(chaptersCollection.addNode({
                    ...chapterMeta,
                }).id);
            });

            lessonsCollection.addNode({
                chapters: chapterList,
                ...lessonMeta,
            });
        });
    });
};
