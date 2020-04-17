module.exports = {
    extends: ['stylelint-config-standard'],
    rules: {

        /* These three parameters fix a few problems regarding Tailwind integration with Stylelint
           This is unfortunate because I'd probably have used declaration-block-trailing-semicolon
        */
        'at-rule-no-unknown': [true, {
            ignoreAtRules: [
                'tailwind',
                'apply',
                'variants',
                'responsive',
                'screen',
            ],
        }],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,

        /* Personal preference.
           See .eslintrc.js for more info regarding this choice
        */
        indentation: [4, { baseIndentLevel: 1 }],

        /* Personal preference.
           stylelint-config-standard doesn't allow putting multiple selector on the same line, this is a bit similar
           to vue/max-attributes-per-line in eslint. Check there for more info regarding this choice
        */
        'selector-list-comma-newline-after': 'always-multi-line',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',

        /* Thanks to Autoprefixer, we don't need to add the prefixes ourselves. This lead to cleaner code
           Also, it's particularly useful to avoid random copy pastes from StackOverflow that contain prefixes
        */
        'property-no-vendor-prefix': true,
    },
};
