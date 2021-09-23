module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/*.{vue,ts,tsx}", "./src/**/*.{vue,ts,tsx}"],
  darkMode: false,
  theme: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
