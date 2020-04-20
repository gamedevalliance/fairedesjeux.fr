module.exports = {
    theme: {
        fontFamily: {
            display: ['Muli', 'Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
            body: ['Muli', 'Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
            title: ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
        },
        extend: {
            colors: {
                body: '#182029',
                area: '#1f2934',
                font: '#ebebeb',
                'font-2': '#B9B9B9',
                'font-3': '#9496a8',
                marvin: '#e47b65',
                astride: '#9e96d0',
                remi: '#00978c',
            },

            letterSpacing: {
                logo: '0.035em',
                title: '-0.03em',
            },

            lineHeight: {
                articleTitle: '0.95',
            },

            inset: {
                '1px': '1px',
            },

            width: {
                900: '90%',
                1000: '100vw',
            },

            maxWidth: {
                900: '90%',
                1000: '100vw',
            },

            margin: {
                content: '18rem',
            },
            gridTemplateColumns: {
                cont: '17% 60% 15%',
            },
            gap: {
                col: '3%',
            },
        },
    },
    variants: {},
    plugins: [
        ({ addBase, config }) => {
            addBase({
                h2: { fontSize: config('theme.fontSize.xl') },
                h3: { fontSize: config('theme.fontSize.lg') },
            });
        },
    ],
};
