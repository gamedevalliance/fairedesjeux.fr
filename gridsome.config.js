const tailwind = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');

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
                typeName: 'Sections',
                path: './content/lessons/**/*.md',
            },
        },
    ],
    templates: {
        Sections: '/:title',
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
