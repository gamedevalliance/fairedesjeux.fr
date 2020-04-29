module.exports = {
    theme: {
        fontFamily: {
            display: ['Source Code Pro'],
            body: ['Muli'],
            title: ['Source Sans Pro'],
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
                logo: '0.075em',
                title: '-0.03em',
            },

            lineHeight: {
                articleTitle: '0.95',
            },

            inset: {
                '1px': '1px',
            },

            height: {
                featuredClass: '19rem',
                gameEngineClass: '18.5rem',
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
            fontSize: {
                sm: '15px',
                lg: '18.5px',
            },
        },
    },
    variants: {},
    plugins: [
        ({ addBase, addComponents, config }) => {
            addBase({
                p: {
                    color: config('theme.textColor.font'),
                    fontFamily: config('theme.fontFamily.body'),
                    fontSize: config('theme.fontSize.lg'),
                    lineHeight: '1.5',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },

                a: {
                    color: config('theme.textColor.astride'),
                    textDecoration: 'none',
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: config('theme.textColor.astride'),

                    '&:hover': {
                        color: config('theme.textColor.marvin'),
                        borderColor: config('theme.textColor.marvin'),
                    },
                },

                img: {
                    maxWidth: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                },

                h2: {
                    color: config('theme.textColor.astride'),
                    fontFamily: config('theme.fontFamily.title'),
                    fontSize: config('theme.fontSize.5xl'),
                    fontWeight: '700',
                    lineHeight: '1.25',
                    letterSpacing: config('theme.letterSpacing.title'),
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },

                h3: {
                    color: config('theme.textColor.remi'),
                    fontFamily: config('theme.fontFamily.title'),
                    fontSize: config('theme.fontSize.3xl'),
                    fontWeight: '700',
                    lineHeight: '1.5',
                    letterSpacing: config('theme.letterSpacing.title'),
                    marginTop: '2rem',
                    marginBottom: '0.5rem',
                },

                h5: {
                    color: config('theme.textColor.font-2'),
                    fontFamily: config('theme.fontFamily.title'),
                    fontWeight: '600',
                    textAlign: 'center',
                    lineHeight: '1.5',
                    letterSpacing: config('theme.letterSpacing.title'),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                },

                /*
                NOTE : PrismJS CSS overwrite AddBase rules :'( 'll look for a workaround
                - Nev 29/04/2020

                pre: {
                    backgroundColor: config('theme.backgroundColor.area'),
                    fontSize: config('theme.fontSize.sm'),
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    border: '0px',
                    borderRadius: config('theme.borderRadius.md'),
                    textShadow: 'none',
                    boxShadow: 'none',
                },
                code: {
                    backgroundColor: config('theme.backgroundColor.body'),
                    fontSize: config('theme.fontSize.sm'),
                    paddingTop: '0.25rem',
                    paddingBottom: '0.25rem',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    border: '0px',
                    borderRadius: config('theme.borderRadius.md'),
                    textShadow: 'none',
                    boxShadow: 'none',
                },
                */

                ul: {
                    color: config('theme.textColor.font'),
                    lineHeight: config('theme.lineHeight.normal'),
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },

                table: {
                    color: config('theme.textColor.font'),
                    fontFamily: config('theme.fontFamily.body'),
                    fontSize: config('theme.fontSize.lg'),
                    lineHeight: config('theme.lineHeight.normal'),
                    width: 'auto',
                    maxWidth: '100%',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderSpacing: '0',
                    tableLayout: 'fixed',
                },

                td: {
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: config('theme.textColor.font-2'),
                    margin: '1rem',
                    textAlign: 'top',
                },

                th: {
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: config('theme.textColor.font-2'),
                    margin: '1rem',
                    textAlign: 'top',
                },
            });
            addComponents({
                '.area': {
                    backgroundColor: config('theme.backgroundColor.area'),
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    border: '0px',
                    borderRadius: config('theme.borderRadius.md'),
                },
            });
        },
    ],
};
