const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/**/*.astro"],
  safelist: [
    { pattern: /bubble(|::after)/ },
    { pattern: /bubble-(marvin|oofmarvin|hypemarvin)(|::after)/ },
    { pattern: /bubble-(astride|sighastride|winkastride)(|::after)/ },
    { pattern: /bubble-(remi|profremi|notlikethisremi)(|::after)/ },
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Source Code Pro"],
      body: ["Muli"],
      title: ["Source Sans Pro"],
    },
    extend: {
      colors: {
        body: "#182029",
        area: "#1f2934",
        "area-2": "#293340",
        font: "#ebebeb",
        "font-2": "#B9B9B9",
        "font-3": "#9496a8",
        marvin: "#e47b65",
        astride: "#9e96d0",
        remi: "#00978c",
      },

      letterSpacing: {
        logo: "0.075em",
        title: "-0.03em",
      },

      lineHeight: {
        articleTitle: "0.95",
      },

      inset: {
        "1px": "1px",
        20: "20px",
      },

      height: {
        featuredCourse: "19rem",
        normalCourse: "18.5rem",
        courseCover: "19rem",
      },

      width: {
        450: "45rem",
        900: "90%",
        1000: "100vw",
      },

      maxWidth: {
        900: "90%",
        1000: "100vw",
      },

      minWidth: {
        6: "6rem",
      },

      margin: {
        content: "18rem",
      },
      gridTemplateColumns: {
        cont: "17% 60% 15%",
        tab: "20% 80%",
        mob: "100%",
      },
      gap: {
        col: "3%",
      },
      fontSize: {
        sm: "15px",
        lg: "18.5px",
        mobileMenu: "1.2rem",
        big: "6rem",
      },

      // Speech bubbles
      backgroundImage: () => ({
        marvinNeutral: "url('~@avatars/marvin.png')",
        marvinHype: "url('~@avatars/marvin-hehe.png')",
        marvinOof: "url('~@avatars/marvin-oof.png')",

        astrideNeutral: "url('~@avatars/astride.png')",
        astrideWink: "url('~@avatars/astride-wink.png')",
        astrideSigh: "url('~@avatars/astride-tss.png')",

        remiNeutral: "url('~@avatars/remi.png')",
        remiProf: "url('~@avatars/remi-hum.png')",
        remiNotLikeThis: "url('~@avatars/remi-ono.png')",
      }),
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, theme }) => {
      addBase({
        "main p": {
          color: theme("textColor.font"),
          fontSize: theme("fontSize.lg"),
          lineHeight: "1.5",
          marginTop: "1rem",
          marginBottom: "1rem",
          "@media (max-width: 640px)": {
            fontSize: theme("fontSize.base"),
          },
        },

        a: {
          color: theme("textColor.astride"),
          textDecoration: "none",
          borderBottomWidth: "1px",
          borderStyle: "solid",
          borderColor: theme("textColor.astride"),

          "&:hover": {
            color: theme("textColor.marvin"),
            borderColor: theme("textColor.marvin"),
          },
        },

        "img, iframe": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        },

        video: {
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        },

        h2: {
          color: theme("textColor.astride"),
          fontFamily: theme("fontFamily.title"),
          fontSize: theme("fontSize.5xl"),
          fontWeight: "700",
          lineHeight: "1.25",
          letterSpacing: theme("letterSpacing.title"),
          marginTop: "1rem",
          marginBottom: "1rem",
          "@media (max-width: 640px)": {
            fontSize: theme("fontSize.4xl"),
          },
        },

        h3: {
          color: theme("textColor.remi"),
          fontFamily: theme("fontFamily.title"),
          fontSize: theme("fontSize.3xl"),
          fontWeight: "700",
          lineHeight: "1.5",
          letterSpacing: theme("letterSpacing.title"),
          marginTop: "2rem",
          marginBottom: "0.5rem",
          "@media (max-width: 640px)": {
            fontSize: theme("fontSize.2xl"),
          },
        },

        h4: {
          color: theme("textColor.font"),
          fontFamily: theme("fontFamily.title"),
          fontSize: theme("fontSize.xl"),
          fontWeight: "700",
          lineHeight: "1.5",
          letterSpacing: theme("letterSpacing.title"),
          "@media (max-width: 640px)": {
            fontSize: theme("fontSize.xl"),
          },
        },

        h5: {
          color: theme("textColor.font-2"),
          fontFamily: theme("fontFamily.title"),
          fontSize: "1.20rem",
          fontWeight: "700",
          lineHeight: "1.5",
          letterSpacing: theme("letterSpacing.title"),
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "1rem",
          marginTop: "1rem",
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

        "ul, ol": {
          color: theme("textColor.font"),
          fontSize: theme("fontSize.lg"),
          lineHeight: theme("lineHeight.normal"),
          marginTop: "1rem",
          marginBottom: "1rem",
          "@media (max-width: 640px)": {
            fontSize: theme("fontSize.base"),
          },
        },

        /*
                    NOTE : The next two rules are for second level lists - Nev, 14/08/2020
                */
        "li > ul > li, li > ol > li": {
          marginLeft: "2rem",
        },

        "li > p": {
          display: "inline",
        },

        table: {
          color: theme("textColor.font"),
          fontFamily: theme("fontFamily.body"),
          fontSize: theme("fontSize.lg"),
          lineHeight: theme("lineHeight.normal"),
          width: "auto",
          maxWidth: "100%",
          marginTop: "1rem",
          marginBottom: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          borderSpacing: "0",
          tableLayout: "fixed",
          "@media (max-width: 640px)": {
            fontSize: theme("fontSize.base"),
          },
        },

        "td, th": {
          borderBottomWidth: "1px",
          borderStyle: "solid",
          borderColor: theme("textColor.font-2"),
          margin: "1rem",
          textAlign: "top",
        },
      })
      addComponents({
        ".smooth": {
          scrollBehavior: "smooth",
        },
        ".area": {
          backgroundColor: theme("backgroundColor.area"),
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          border: "0px",
          borderRadius: theme("borderRadius.md"),
        },
        ".button": {
          margin: "0 0.5rem",
          textAlign: "center",
          color: theme("textColor.font"),
          border: "none",
          fontWeight: "bold",
          "&:hover": {
            color: theme("textColor.font"),
          },
          "&.disabled": {
            opacity: "0.75",
            "&>div": {
              backgroundColor: theme("colors.gray.800"),
              color: theme("colors.gray.600"),
            },
          },
          "&>div": {
            backgroundColor: theme("textColor.remi"),
            borderRadius: theme("borderRadius.md"),
            width: "100%",
            display: "inline-block",
            textAlign: "center",
            padding: "0.75rem 1rem",
            userSelect: "none",
          },
          "&:not(.disabled)>div:hover": {
            backgroundColor: theme("textColor.marvin"),
          },
        },
        ".smola": {
          color: theme("textColor.font-3"),
          border: "none",
          textDecoration: "none",
          fontSize: "15px",

          "&:hover": {
            color: theme("textColor.font-2"),
            textDecoration: "underline",
          },
        },

        // Speech bubbles
        ".bubble": {
          "& .bubble-content": {
            display: "inline-block",
            textAlign: "left",
            backgroundColor: theme("backgroundColor.area"),
            padding: "0.5rem 2.5rem",
            margin: "1rem -20px",
            borderRadius: theme("borderRadius.full"),
            maxWidth: "89%",
          },
          "& h5": {
            display: "inline-block",
            margin: "0",
            padding: "0.25rem 1.25rem",
            position: "relative",
            fontSize: theme("fontSize.lg"),
            textAlign: "center",
            backgroundColor: theme("backgroundColor.area-2"),
            borderRadius: theme("borderRadius.lg"),
            top: "2rem",
            marginTop: "-2rem",
          },

          "&::after": {
            content: '""',
            width: "100px",
            height: "100px",
            bottom: "0",
            position: "relative",
            display: "inline-block",
            backgroundSize: "cover",
          },
        },

        // Speech Bubbles - Marvin
        ".bubble-marvin, .bubble-hypemarvin, .bubble-oofmarvin": {
          textAlign: "right",

          "& h5": {
            color: theme("colors.marvin"),
            right: "116px",
          },

          "&::after": {
            float: "right",
          },
        },

        ".bubble-marvin": {
          "&::after": {
            backgroundImage: theme("backgroundImage.marvinNeutral"),
          },
        },

        ".bubble-hypemarvin": {
          "&::after": {
            backgroundImage: theme("backgroundImage.marvinHype"),
          },
        },

        ".bubble-oofmarvin": {
          "&::after": {
            backgroundImage: theme("backgroundImage.marvinOof"),
          },
        },

        // Speech Bubbles - Astride
        ".bubble-astride, .bubble-winkastride, .bubble-sighastride": {
          textAlign: "left",

          "& h5": {
            color: theme("colors.astride"),
            left: "116px",
          },

          "&::after": {
            float: "left",
          },
        },

        ".bubble-astride": {
          "&::after": {
            backgroundImage: theme("backgroundImage.astrideNeutral"),
          },
        },

        ".bubble-winkastride": {
          "&::after": {
            backgroundImage: theme("backgroundImage.astrideWink"),
          },
        },

        ".bubble-sighastride": {
          "&::after": {
            backgroundImage: theme("backgroundImage.astrideSigh"),
          },
        },

        // Speech Bubbles - Rémi
        ".bubble-remi, .bubble-profremi, .bubble-notlikethisremi": {
          textAlign: "left",

          "& h5": {
            color: theme("colors.remi"),
            left: "116px",
          },

          "&::after": {
            float: "left",
          },
        },

        ".bubble-remi": {
          "&::after": {
            backgroundImage: theme("backgroundImage.remiNeutral"),
          },
        },

        ".bubble-profremi": {
          "&::after": {
            backgroundImage: theme("backgroundImage.remiProf"),
          },
        },

        ".bubble-notlikethisremi": {
          "&::after": {
            backgroundImage: theme("backgroundImage.remiNotLikeThis"),
          },
        },
      })
    }),
  ],
}
