const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./*.html", "./src/**/*.{ts,vue}"],
  darkMode: false,
  corePlugins: {
    // We disable those because they add stuff to the CSS file even when unused
    filter: false,
    ringWidth: false,
    ringColor: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    boxShadow: false,
    transform: false,
    backdropFilter: false,
  },
  theme: {
    fontFamily: {
      display: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
      body: ["Muli", ...defaultTheme.fontFamily.sans],
      title: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      letterSpacing: {
        logo: "0.075em",
        title: "-0.03em",
      },
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
      width: {
        180: "45rem",
      },
      animation: {
        bounce: "bounce 0.45s",
      },
      gridTemplateColumns: {
        cont: "17% 60% 15%",
        tab: "20% 80%",
        mob: "100%",
      },
      gap: {
        col: "3%",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "rotateX(20deg) translateY(1px) rotate(-3deg)" },
          "40%": { transform: "translateY(-5px) rotate(3deg) scale(1.1)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ".prose": {
          color: theme("textColor.font"),
          fontSize: theme("fontSize.lg"),
          lineHeight: theme("lineHeight.normal"),
          "@media (max-width: 640px)": {
            fontSize: theme("fontSize.base"),
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

          "ul, ol, p": {
            marginTop: "1rem",
            marginBottom: "1rem",
          },

          "li > ul > li, li > ol > li": {
            marginLeft: "2rem",
          },
        },

        "main a": {
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
      });
    }),
  ],
};
