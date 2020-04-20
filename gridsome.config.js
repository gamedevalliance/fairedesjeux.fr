const tailwind = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
const slugify = require('@sindresorhus/slugify');

const postcssPlugins = [
    postcssPresetEnv({ stage: 0, autoprefixer: false }),
    tailwind('./tailwind.config.js'),
];

module.exports = {
    siteName: 'FaireDesJeux.fr',
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Section',
                baseDir: './content/courses/',
                path: '**/*.md',
            },
        },
    ],
    templates: {
        Section: [{
            path: (node) => {
                /*
                    NOTE : Black magic, since we can't get the chapter name from the node itself since it's added to it
                    later (in onCreateNode) we can't get it here so we have to get it ourselves - erika, 2020-04-20
                */
                const idToRemove = node.fileInfo.directory.substring(node.fileInfo.directory.indexOf('/', 2) + 1, node.fileInfo.directory.indexOf('/', 2) + 4);
                return `/${node.fileInfo.directory.replace(idToRemove, '')}/${slugify(node.title)}`;
            },
            component: './src/templates/Sections.vue',
        }],
        Course: [{
            path: '/:slug',
            component: './src/templates/Courses.vue',
        }],
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
    transformers: {
        remark: {
            options: {
                footnotes: true,
            },
            plugins: [
                '@gridsome/remark-prismjs',
            ],
        },
    },
};
