module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.js',
    ],
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
                'area-2': '#293340',
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
                20: '20px',
            },

            height: {
                featuredClass: '19rem',
                gameEngineClass: '18.5rem',
            },

            width: {
                404: '40rem',
                900: '90%',
                1000: '100vw',
            },

            maxWidth: {
                900: '90%',
                1000: '100vw',
            },

            minWidth: {
                6: '6rem',
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
                404: '7rem',
            },
        },
    },
    variants: {},
    plugins: [
        ({
            addBase, addComponents, theme,
        }) => {
            addBase({
                'section p': {
                    color: theme('textColor.font'),
                    fontSize: theme('fontSize.lg'),
                    lineHeight: '1.5',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },

                a: {
                    color: theme('textColor.astride'),
                    textDecoration: 'none',
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: theme('textColor.astride'),

                    '&:hover': {
                        color: theme('textColor.marvin'),
                        borderColor: theme('textColor.marvin'),
                    },
                },

                img: {
                    maxWidth: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                },

                video: {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },

                h2: {
                    color: theme('textColor.astride'),
                    fontFamily: theme('fontFamily.title'),
                    fontSize: theme('fontSize.5xl'),
                    fontWeight: '700',
                    lineHeight: '1.25',
                    letterSpacing: theme('letterSpacing.title'),
                    marginTop: '1rem',
                    marginBottom: '1rem',
                },

                h3: {
                    color: theme('textColor.remi'),
                    fontFamily: theme('fontFamily.title'),
                    fontSize: theme('fontSize.3xl'),
                    fontWeight: '700',
                    lineHeight: '1.5',
                    letterSpacing: theme('letterSpacing.title'),
                    marginTop: '2rem',
                    marginBottom: '0.5rem',
                },

                h4: {
                    color: theme('textColor.font'),
                    fontFamily: theme('fontFamily.title'),
                    fontSize: theme('fontSize.xl'),
                    fontWeight: '700',
                    lineHeight: '1.5',
                    letterSpacing: theme('letterSpacing.title'),
                },

                h5: {
                    color: theme('textColor.font-2'),
                    fontFamily: theme('fontFamily.title'),
                    fontWeight: '600',
                    textAlign: 'center',
                    lineHeight: '1.5',
                    letterSpacing: theme('letterSpacing.title'),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                },

                /*
                NOTE : PrismJS CSS overwrite AddBase rules :'( 'll look for a workaround
                - Nev 29/04/2020

                pre: {
                    backgroundColor: theme('backgroundColor.area'),
                    fontSize: theme('fontSize.sm'),
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    border: '0px',
                    borderRadius: theme('borderRadius.md'),
                    textShadow: 'none',
                    boxShadow: 'none',
                },
                code: {
                    backgroundColor: theme('backgroundColor.body'),
                    fontSize: theme('fontSize.sm'),
                    paddingTop: '0.25rem',
                    paddingBottom: '0.25rem',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    border: '0px',
                    borderRadius: theme('borderRadius.md'),
                    textShadow: 'none',
                    boxShadow: 'none',
                },
                */

                'ul, ol': {
                    color: theme('textColor.font'),
                    lineHeight: theme('lineHeight.normal'),
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    fontSize: theme('fontSize.lg'),
                },

                table: {
                    color: theme('textColor.font'),
                    fontFamily: theme('fontFamily.body'),
                    fontSize: theme('fontSize.lg'),
                    lineHeight: theme('lineHeight.normal'),
                    width: 'auto',
                    maxWidth: '100%',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderSpacing: '0',
                    tableLayout: 'fixed',
                },

                'td, th': {
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: theme('textColor.font-2'),
                    margin: '1rem',
                    textAlign: 'top',
                },
            });
            addComponents({
                '.smooth': {
                    scrollBehavior: 'smooth',
                },
                '.area': {
                    backgroundColor: theme('backgroundColor.area'),
                    paddingTop: '0.75rem',
                    paddingBottom: '0.75rem',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    border: '0px',
                    borderRadius: theme('borderRadius.md'),
                },
                '.button': {
                    margin: '0 0.5rem',
                    textAlign: 'center',
                    color: theme('textColor.font'),
                    border: 'none',
                    fontWeight: 'bold',
                    '&:hover': {
                        color: theme('textColor.font'),
                    },
                    '&.disabled': {
                        opacity: '0.75',
                        '&>div': {
                            backgroundColor: theme('colors.gray.800'),
                            color: theme('colors.gray.600'),
                        },
                    },
                    '&>div': {
                        backgroundColor: theme('textColor.remi'),
                        borderRadius: theme('borderRadius.md'),
                        width: '100%',
                        display: 'inline-block',
                        textAlign: 'center',
                        padding: '0.75rem 1rem',
                        userSelect: 'none',
                    },
                    '&:not(.disabled)>div:hover': {
                        backgroundColor: theme('textColor.marvin'),
                    },
                },
                '.smola': {
                    color: theme('textColor.font-3'),
                    border: 'none',
                    textDecoration: 'none',

                    '&:hover': {
                        color: theme('textColor.font-2'),
                        textDecoration: 'underline',
                    },
                },
            });
        },
    ],
};
