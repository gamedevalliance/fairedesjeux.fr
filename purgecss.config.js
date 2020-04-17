class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\\/]+/g) || [];
    }
}

module.exports = {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.html',
        './src/**/*.md',
    ],
    whitelist: [
        'svg:not(:root).svg-inline--fa',
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
    ],
    whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
    extractors: [
        {
            extractor: TailwindExtractor,
            extensions: ['vue', 'js', 'md', 'html'],
        },
    ],
};
