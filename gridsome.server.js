// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

/*
    NOTE: We have to disable those two rules because Gridsome force us to modify nodes in a way ESlint is not happy
    about, this won't be needed if we'd be able to remove onCreateNode completely - erika, 2020-04-19
*/

/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

const fs = require('fs');
const unified = require('unified');
const markdown = require('remark-parse');
const html = require('remark-html');
const axios = require('axios');

// eslint-disable-next-line func-names
module.exports = function (api) {
    api.loadSource(({ addSchemaTypes, addCollection }) => {
        const typeSchema = fs.readFileSync('./types.graphql', 'utf-8');
        addSchemaTypes(typeSchema);

        /*
            NOTE: I'm not sure quite why this is needed. If we don't do that, Gridsome doesn't add all the sorting &
            filtering arguments. However, if we do this, it does.. How weird - erika, 2020-04-30
        */
        const chapterCollection = addCollection('Chapter');
        chapterCollection.addReference('sections', '[Section]');

        /*
        NOTE: Don't mind me, I'm just getting the Github API for the "contributors" page - Nev, 2020-08-07
        */
        const contributorCollection = addCollection('Contributor');
        axios.get('https://api.github.com/repos/gamedevalliance/fairedesjeux.fr/contributors').then((resp) => {
            Object.values(resp.data).forEach((contributor) => {
                contributorCollection.addNode({
                    name: contributor.login,
                    profile: contributor.html_url,
                    commits: contributor.contributions,
                    id: contributor.id,
                });
            });
        });
    });

    /*
        TODO: Refactor and document what we are doing here better. What's the purpose of tempMap and tempMap2?

        The first one is the list of Section, it's a key-value where the key is the id of the chapter and the value is
        the chapter it's in

        The second one is the list of Chapter, same thing as the first one except the key is the name of the chapter and
        the value is the course that it's in.
    */
    const tempMap = {};
    const tempMap2 = {};
    let lastSection = {};
    api.onCreateNode((options) => {
        if (options.internal.typeName === 'Section') {
            // Format: {course-name}/{chapter-id}/{course-id}
            options.name = `${options.fileInfo.directory.substring(0, options.fileInfo.directory.indexOf('/') + 3)}/${options.fileInfo.name.substring(0, 2)}`;
            options.chapter = options.name.substring(0, options.name.indexOf('/') + 3);
            options.course = options.chapter.substring(0, options.chapter.indexOf('/'));

            if (tempMap[options.chapter] === undefined) {
                const sectionPath = `./content/courses/${options.fileInfo.directory}/`;
                const sectionCount = fs.readdirSync(sectionPath).filter((file) => file.endsWith('.md')).length;

                const chapterPath = `./content/courses/${options.fileInfo.directory.substring(0, options.fileInfo.directory.indexOf('/', 2))}/`;
                const chapterCount = fs.readdirSync(chapterPath).filter((dir) => dir.charAt(2) === '-').length;

                tempMap[options.chapter] = {
                    sections: [], sectionCount, chapterCount,
                };
            }

            tempMap[options.chapter].sections.push(options.id);

            if (lastSection) {
                if (lastSection.course === options.course) {
                    options.previous = lastSection.name;
                }
            }

            // Weird stuff
            const currentId = parseInt(options.name.slice(-2), 10);
            const currentChapterId = parseInt(options.chapter.slice(-2), 10);
            if (tempMap[options.chapter].sectionCount > currentId) {
                options.next = `${options.chapter}/${String(currentId + 1).padStart(2, '0')}`;
            } else if (tempMap[options.chapter].chapterCount > currentChapterId) {
                options.next = `${options.course}/${String(currentChapterId + 1).padStart(2, '0')}/01`;
            }

            lastSection = options;

            return {
                ...options,
            };
        }

        //

        if (options.internal.typeName === 'Chapter') {
            options.name = options.fileInfo.directory.substring(0, options.fileInfo.directory.indexOf('/') + 3);
            options.course = options.fileInfo.directory.substring(0, options.fileInfo.directory.indexOf('/'));

            const tempList = [];
            if (tempMap[options.name] !== undefined) {
                tempMap[options.name].sections.forEach((section) => tempList.push(section));
                options.sections = tempList;
            }

            tempMap2[options.name] = options.course;

            return {
                ...options,
            };
        }

        if (options.internal.typeName === 'Course') {
            options.name = options.fileInfo.directory;
            options.engine_name = options.engine_name || null;

            const tempList = [];
            Object.entries(tempMap2).forEach(([key, value]) => {
                if (value === options.name) {
                    tempList.push(key);
                }
            });

            options.chapters = tempList;

            if (options.medal_message) {
                unified()
                    .use(markdown)
                    .use(html)
                    .process(options.medal_message, (err, result) => {
                        if (err) throw err;

                        options.medal_message = String(result);
                    });
            }

            return {
                ...options,
            };
        }
    });
};
