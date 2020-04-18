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
                typeName: 'Section',
                path: './content/lessons/**/*.md',
            },
        },
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
};
